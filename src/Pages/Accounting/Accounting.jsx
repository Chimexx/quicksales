import { Checkbox, Container, Divider, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Progress from "../../components/Utils/Progress";
import { useStyles } from "./Accounting.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendors } from "../../redux/vendorsApi";
import { convertMoney } from "../../components/Utils/converter";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import dayjs from "dayjs";
import { BsCheckSquare } from "react-icons/bs";

const Accounting = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [vendor, setVendor] = useState({});
	const [bills, setBills] = useState([]);
	const [checked, setChecked] = useState(false);

	const { vendorList, isFetching_vendor } = useSelector((state) => state.vendors);
	const [vendors, setVendors] = useState(vendorList);

	useEffect(() => {
		fetchVendors(dispatch);
	}, [dispatch]);

	useEffect(() => {
		setVendors(vendorList.filter((vendor) => vendor.company.includes(term)));
	}, [term, vendorList]);

	const handleCheckedBills = () => {
		setChecked(true);
		// setBills((prev) => [...prev, bill]);
	};
	const handleUncheckedBills = (bill) => {
		setBills((prev) => [...prev, bill]);
	};
	console.log(bills);
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
							{vendors.map((vendor) => (
								<div
									key={vendor._id}
									className={classes.eachVendor}
									onClick={() => setVendor(vendor)}
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
							<Table className={classes.table} size="small" aria-label="a dense table">
								<TableHead>
									<TableRow className={classes.table__head} style={{ fontWeight: 700 }}>
										<TableCell align="center" className={classes.table__head}>
											<BsCheckSquare />
										</TableCell>
										<TableCell align="center" className={classes.table__head}>
											Type
										</TableCell>
										<TableCell align="center" className={classes.table__head}>
											Date
										</TableCell>
										<TableCell align="center" className={classes.table__head}>
											Amount
										</TableCell>
										<TableCell align="center" className={classes.table__head}>
											Status
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{vendor?.openAccount?.map((row) => (
										<TableRow key={row._id}>
											<TableCell align="center">
												<Checkbox
													checked={checked}
													className={classes.check}
													color="primary"
													inputProps={{
														"aria-label": "checkbox with default color",
													}}
													onChange={handleCheckedBills}
												/>
											</TableCell>
											<TableCell align="center">Bill</TableCell>
											<TableCell align="center">
												{dayjs(row.date).format("DD MMM, YYYY")}
											</TableCell>
											<TableCell align="center">{row.amount}</TableCell>
											<TableCell align="center">{row.status}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Accounting;
