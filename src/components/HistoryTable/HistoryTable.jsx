import React, { useState } from "react";
import { convertMoney } from "../../components/Utils/converter";
import { Card, Container, Divider, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./HistoryTable.styles";
import dayjs from "dayjs";

const HistoryTable = ({ history, type }) => {
	const classes = useStyles();
	const [singleHistory, setSingleHistory] = useState(null);

	return (
		<div className={classes.wrapper}>
			<TableContainer component={Paper} className={classes.tableContainer}>
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow className={classes.tableHead}>
							<TableCell className={classes.tableHead}>#</TableCell>
							<TableCell className={classes.tableHead}>Date</TableCell>
							<TableCell className={classes.tableHead}>
								{type === "sales" ? "Customer" : "Vendor"}
							</TableCell>
							<TableCell className={classes.tableHead}>Total Amt</TableCell>
							<TableCell className={classes.tableHead}>Cashier</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{history.map((row, index) => (
							<TableRow
								className={classes.tableBody}
								key={row._id}
								onClick={() => setSingleHistory(row)}
							>
								<TableCell align="left">{index + 1}</TableCell>
								<TableCell align="left">
									{dayjs(row.createdAt).format("DD MMM, YYYY")}
								</TableCell>

								{type === "sales" ? (
									<TableCell component="th" scope="row">
										{row.customer?.firstName.length > 30
											? row.customer?.firstName.slice(0, 30) + "..."
											: row.customer?.firstName}
									</TableCell>
								) : (
									<TableCell component="th" scope="row">
										{row.vendor?.company.length > 30
											? row.vendor?.company.slice(0, 30) + "..."
											: row.vendor?.company}
									</TableCell>
								)}

								<TableCell align="left">{convertMoney(row.totalAmt)}</TableCell>
								<TableCell align="left">{row.cashier}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Container className={classes.containerRight}>
				<Container className={classes.new}>
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						History Details {singleHistory && <p> Total Items: {singleHistory?.items.length}</p>}
					</Typography>
					<Container className={classes.inner__body}>
						{singleHistory ? (
							singleHistory?.items.map((item) => (
								<Card variant="outlined" key={item._id} className={classes.item}>
									<div style={{ display: "flex", justifyContent: "space-between" }}>
										<p className={classes.row}>
											<span className={classes.span}>Item: </span>
											{item.itemName}
										</p>
									</div>
									<Divider />
									{type === "sales" ? (
										<p className={classes.row}>
											<span className={classes.span}>Price:</span>
											{convertMoney(item.salesPrice)}
										</p>
									) : (
										<p className={classes.row}>
											<span className={classes.span}>Cost:</span>
											{convertMoney(item.costPrice)}
										</p>
									)}

									<Divider />
									<p className={classes.row}>
										<span className={classes.span}>Qty: </span>
										{item.onHandQty}
									</p>
								</Card>
							))
						) : (
							<Card
								variant="outlined"
								className={classes.item}
								style={{
									padding: "2rem 1rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 22,
								}}
							>
								Select a history to see details
							</Card>
						)}
					</Container>
				</Container>
			</Container>
		</div>
	);
};

export default HistoryTable;
