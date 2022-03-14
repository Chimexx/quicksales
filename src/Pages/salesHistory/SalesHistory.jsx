import { Typography, Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./SalesHistory.styles";
import { useDispatch, useSelector } from "react-redux";
import Progress from "../../components/Utils/Progress";
import { BiReset } from "react-icons/bi";
import { HiDocumentSearch } from "react-icons/hi";
import "./date.css";

import dayjs from "dayjs";
import { fetchSalesHistorys } from "../../redux/salesHistoryApi";
import HistoryTable from "../../components/HistoryTable/HistoryTable";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const SalesHistory = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [sort, setSort] = useState("");
	const [term, setTerm] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	useEffect(() => {
		fetchSalesHistorys(dispatch);
	}, [dispatch]);

	const { salesHistoryList, isFetching_history } = useSelector((state) => state.salesHistorys);
	const [salesHistory, setSalesHistory] = useState(salesHistoryList);

	//Sort function
	useEffect(() => {
		if (sort === "createdAt") {
			setSalesHistory((prev) =>
				[...prev]
					.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
					.reverse()
			);
		} else if (sort === "cashier") {
			setSalesHistory((prev) =>
				[...prev].sort((a, b) => (a.cashier > b.cashier ? 1 : b.cashier > a.cashier ? -1 : 0))
			);
		} else if (sort === "total") {
			setSalesHistory((prev) => [...prev].sort((a, b) => a.totalAmt - b.totalAmt));
		} else if (sort === "default") {
			setSalesHistory(salesHistoryList);
		}
	}, [sort, salesHistoryList]);
	console.log(salesHistoryList);
	//Search function
	useEffect(() => {
		if (term) {
			setSalesHistory(
				salesHistoryList?.filter(
					(history) =>
						history.cashier?.toLowerCase().includes(term.toLowerCase()) ||
						history.totalAmt === parseInt(term) ||
						history.customer?.firstName.toLowerCase().includes(term.toLowerCase())
				)
			);
		} else {
			setSalesHistory(salesHistoryList);
		}
	}, [term, salesHistoryList]);

	//Date filter function
	const handleFilter = () => {
		setSalesHistory((prev) =>
			[...prev].filter(
				(history) =>
					new Date(history.createdAt) >= startDate && new Date(history.createdAt) <= endDate
			)
		);
		console.log(new Date(startDate.setDate(new Date().getDate() + 1)));
	};

	const sortOptions = [
		{ name: "Cashier", value: "cashier" },
		{ name: "Total Amt", value: "total" },
		{ name: "Date Added", value: "createdAt" },
	];

	return (
		<>
			<div className={classes.container}>
				{isFetching_history && <Progress />}
				<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
					Sales History
				</Typography>
				<Card className={classes.bar} variant="outlined">
					<div className={classes.inputContainer}>
						<HiDocumentSearch className={classes.searchIcon} />
						<input
							type="text"
							className={classes.input}
							placeholder="Search..."
							onChange={(e) => setTerm(e.target.value)}
						/>
					</div>
					<div className={classes.inputContainer}>
						<label htmlFor="sort" style={{ marginRight: 10 }}>
							Sort By:
						</label>
						<select
							name=""
							id="sort"
							onChange={(e) => setSort(e.target.value)}
							className={classes.select}
						>
							<option value="default">default</option>
							{sortOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.name}
								</option>
							))}
						</select>
					</div>
					<div className={classes.inputContainer}>
						<label htmlFor="filter" style={{ marginRight: 10 }}>
							Filter by date:
						</label>
						<input
							type="date"
							className="date_input"
							onChange={(e) => setStartDate(new Date(e.target.value))}
						/>
						to
						<input
							type="date"
							className="date_input"
							onChange={(e) => setEndDate(new Date(e.target.value))}
						/>
						<button className={classes.button} onClick={handleFilter} style={{ marginLeft: 10 }}>
							Go
						</button>
						<button
							className={classes.button}
							onClick={() => setSalesHistory(salesHistoryList)}
							style={{ marginLeft: 10 }}
						>
							<BiReset style={{ fontSize: 22, paddingRight: 5 }} /> Reset
						</button>
					</div>
				</Card>
				<HistoryTable history={salesHistory} type="sales" />
			</div>
		</>
	);
};

export default SalesHistory;
