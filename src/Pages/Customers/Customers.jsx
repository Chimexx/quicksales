import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./Customers.styles";
import { convertMoney } from "../../components/Utils/converter";
import { useDispatch, useSelector } from "react-redux";
import Progress from "../../components/Utils/Progress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fetchCustomers } from "../../redux/customerApi";

const Customers = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { customerList, isFetching_customer } = useSelector((state) => state.customers);

	useEffect(() => {
		fetchCustomers(dispatch);
	}, [dispatch]);

	return (
		<>
			<div className={classes.container}>
				{isFetching_customer && <Progress />}
				<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
					Customer List
				</Typography>

				<TableContainer component={Paper} className={classes.tableContainer}>
					<Table size="small" aria-label="a dense table">
						<TableHead>
							<TableRow className={classes.tableHead}>
								<TableCell className={classes.tableHead}>#</TableCell>
								<TableCell className={classes.tableHead}>First Name</TableCell>
								<TableCell className={classes.tableHead}>Last Name</TableCell>
								<TableCell className={classes.tableHead}>Address</TableCell>
								<TableCell className={classes.tableHead}>Phone</TableCell>
								<TableCell className={classes.tableHead}>Balance</TableCell>
								<TableCell className={classes.tableHead}>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{customerList.map((row, index) => (
								<TableRow className={classes.tableBody} key={row._id}>
									<TableCell align="left">{index + 1}</TableCell>
									<TableCell component="th" scope="row">
										<div style={{ display: "flex", alignItems: "center" }}>
											{row.firstName.length > 30
												? row.firstName.slice(0, 30) + "..."
												: row.firstName}
										</div>
									</TableCell>
									<TableCell component="th" scope="row">
										<div style={{ display: "flex", alignItems: "center" }}>
											{row.lastName?.length > 30
												? row.lastName.slice(0, 30) + "..."
												: row.lastName}
										</div>
									</TableCell>{" "}
									<TableCell align="left">{row.address}</TableCell>
									<TableCell align="left">{row.phone}</TableCell>
									<TableCell align="left">{convertMoney(row.balance)}</TableCell>
									<TableCell align="left">
										<Button size="small"> Edit</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</>
	);
};

export default Customers;
