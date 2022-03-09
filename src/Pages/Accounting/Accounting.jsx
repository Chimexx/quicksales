import { Button, Divider, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Progress from "../../components/Utils/Progress";
import { useStyles } from "./Accounting.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendors } from "../../redux/vendorsApi";
import { convertMoney } from "../../components/Utils/converter";

import dayjs from "dayjs";
import BillPayment from "../../components/BillPayment/BillPayment";

const Accounting = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [vendor, setVendor] = useState(null);
	const [bill, setBill] = useState(null);
	const [value, setValue] = useState(null);
	const [vvalue, setVvalue] = useState(null);
	const [proceed, setProceed] = useState(false);

	const { vendorList, isFetching_vendor } = useSelector((state) => state.vendors);
	const [vendors, setVendors] = useState(vendorList);

	useEffect(() => {
		fetchVendors(dispatch);
	}, [dispatch, vendor]);

	useEffect(() => {
		setVendors(vendorList.filter((vendor) => vendor.company.includes(term)));
	}, [term, vendorList]);

	const handleEntity = (bill, index) => {
		setValue(index);
		setBill(bill);
	};
	const handleVendor = (vendor, index) => {
		setVvalue(index);
		setVendor(vendor);
		setBill(null);
		setValue(null);
	};

	return (
		<>
			<div className={classes.container}>
				{isFetching_vendor && <Progress />}
				<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
					Accounting
				</Typography>
				<div className={classes.body}>
					<div className={classes.list}>
						<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
							Vendors
						</Typography>
						<TextField
							className={classes.search}
							id="outlined-basic"
							size="small"
							autoComplete="off"
							label="Find Vendor"
							variant="outlined"
							onChange={(e) => setTerm(e.target.value)}
						/>
						<Divider className={classes.divider} />
						<div className={classes.vendorlist}>
							{vendors?.map((vendor, index) => (
								<div
									key={vendor._id}
									className={`${classes.eachVendor}  ${
										index === vvalue && classes.active_vendor
									}`}
									onClick={() => handleVendor(vendor, index)}
								>
									<p className={classes.company}>
										{vendor.company.length > 13
											? vendor.company.slice(0, 13) + "..."
											: vendor.company}
									</p>
									<p className={classes.amount}>{convertMoney(vendor.balance)}</p>
								</div>
							))}
						</div>
					</div>
					<div className={classes.main}>
						<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
							Vendor Information
						</Typography>

						<div className={classes.vendor__info}>
							<div className={classes.vendor__title}>
								<p>{vendor?.company}</p>
							</div>
							<Button
								size="small"
								variant="outlined"
								color="primary"
								disabled={isFetching_vendor || !bill}
								onClick={() => setProceed(true)}
							>
								Pay Selected Bill
							</Button>
						</div>
						<Divider />
						<div className={classes.table}>
							<div className={classes.table_head_container}>
								<p className={classes.table_title}>Type</p>
								<p className={classes.table_title}>Date</p>
								<p className={classes.table_title}>Total</p>
								<p className={classes.table_title}>Amount Paid</p>
								<p className={classes.table_title}>Status</p>
							</div>
							<div className={classes.table_body_container}>
								{vendor?.bills?.map((bill, index) => (
									<div key={bill._id}>
										<div
											onClick={() => handleEntity(bill, index)}
											className={`${classes.row}  ${index === value && classes.active}`}
										>
											<p className={classes.cell}>Bill</p>

											<p className={classes.cell}>
												{dayjs(bill.date).format("DD MMM, YYYY")}
											</p>
											<p className={classes.cell}>{convertMoney(bill.totalBilled)}</p>

											<p className={classes.cell}>{convertMoney(bill.totalPaid)}</p>

											<p className={classes.cell}>{bill.status}</p>
										</div>
										<div className={classes.payments_container}>
											{vendor?.payments
												?.filter((payment) => payment.billId === bill._id)
												.map((payment) => (
													<div
														key={payment._id}
														className={`${classes.payments}  ${
															index === value && classes.show_payments
														}`}
													>
														<p className={classes.payment_cell}>Payment</p>

														<p className={classes.payment_cell}>
															{dayjs(payment.date).format("DD MMM, YYYY")}
														</p>
														<p className={classes.payment_cell}>
															{convertMoney(payment.paid)}
														</p>
													</div>
												))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${classes.bill_container}  ${proceed && classes.bill_container_active}`}>
				<BillPayment bill={bill} setProceed={setProceed} vendor={vendor} />
			</div>
		</>
	);
};

export default Accounting;
