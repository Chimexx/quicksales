import { Button, Divider, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Progress from "../Utils/Progress";
import { useStyles } from "./CustomerAccounting.styles";
import { useDispatch, useSelector } from "react-redux";
import { convertMoney } from "../Utils/converter";

import dayjs from "dayjs";
import CreditPayment from "../CreditPayment/CreditPayment";
import { fetchCustomers } from "../../redux/customerApi";

const CustomerAccounting = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [customer, setCustomer] = useState(null);
	const [credit, setCredit] = useState(null);
	const [value, setValue] = useState(null);
	const [vvalue, setVvalue] = useState(null);
	const [proceed, setProceed] = useState(false);

	const { customerList, isFetching_customer } = useSelector((state) => state.customers);
	const [customers, setCustomers] = useState(customerList);

	useEffect(() => {
		fetchCustomers(dispatch);
	}, [dispatch, customer]);

	useEffect(() => {
		setCustomers(customerList.filter((customer) => customer.firstName.includes(term)));
	}, [term, customerList]);

	const handleEntity = (credit, index) => {
		setValue(index);
		setCredit(credit);
	};
	const handleCustomer = (customer, index) => {
		setVvalue(index);
		setCustomer(customer);
		setCredit(null);
		setValue(null);
	};

	return (
		<>
			<div className={classes.container}>
				{isFetching_customer && <Progress />}

				<div className={classes.body}>
					<div className={classes.list}>
						<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
							Customers
						</Typography>
						<TextField
							className={classes.search}
							id="outlined-basic"
							size="small"
							autoComplete="off"
							label="Find Customer"
							variant="outlined"
							onChange={(e) => setTerm(e.target.value)}
						/>
						<Divider className={classes.divider} />
						<div className={classes.customerlist}>
							{customers?.map((customer, index) => (
								<div
									key={customer._id}
									className={`${classes.eachCustomer}  ${
										index === vvalue && classes.active_customer
									}`}
									onClick={() => handleCustomer(customer, index)}
								>
									<p className={classes.customer}>
										{customer.firstName.length > 13
											? customer.firstName.slice(0, 13) + "..."
											: customer.firstName}
									</p>
									<p className={classes.amount}>{convertMoney(customer.balance)}</p>
								</div>
							))}
						</div>
					</div>
					<div className={classes.main}>
						<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
							Customer Information
						</Typography>

						<div className={classes.customer__info}>
							<div className={classes.customer__title}>
								<p>{customer?.firstName}</p>
							</div>
							<Button
								size="small"
								variant="outlined"
								color="primary"
								disabled={isFetching_customer || !credit}
								onClick={() => setProceed(true)}
							>
								Receive Payment
							</Button>
						</div>
						<Divider />
						<table className={classes.table}>
							<tr className={classes.table_head_container}>
								<th className={classes.table_title}>Type</th>
								<th className={classes.table_title}>Date</th>
								<th className={classes.table_title}>Total</th>
								<th className={classes.table_title}>Amount Paid</th>
								<th className={classes.table_title}>Status</th>
							</tr>
							<tbody className={classes.table_body_container}>
								{customer?.credits?.map((credit, index) => (
									<div key={credit._id}>
										<tr
											onClick={() => handleEntity(credit, index)}
											className={`${classes.row}  ${index === value && classes.active}`}
										>
											<td className={classes.cell}>Credit</td>

											<td className={classes.cell}>
												{dayjs(credit.date).format("DD MMM, YYYY")}
											</td>
											<td className={classes.cell}>
												{convertMoney(credit.totalCredited)}
											</td>

											<td className={classes.cell}>{convertMoney(credit.totalPaid)}</td>

											<td className={classes.cell}>{credit.status}</td>
										</tr>
										<div className={classes.payments_container}>
											{customer?.payments
												?.filter((payment) => payment.creditId === credit._id)
												.map((payment) => (
													<tr
														key={payment._id}
														className={`${classes.payments}  ${
															index === value && classes.show_payments
														}`}
													>
														<td className={classes.payment_cell}>Payment</td>

														<td className={classes.payment_cell}>
															{dayjs(payment.date).format("DD MMM, YYYY")}
														</td>
														<td className={classes.payment_cell}>
															{convertMoney(payment.paid)}
														</td>
													</tr>
												))}
										</div>
									</div>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className={`${classes.credit_container}  ${proceed && classes.credit_container_active}`}>
				<CreditPayment credit={credit} setProceed={setProceed} customer={customer} />
			</div>
		</>
	);
};

export default CustomerAccounting;
