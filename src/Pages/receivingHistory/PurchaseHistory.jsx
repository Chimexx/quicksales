import { Typography, Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./PurchaseHistory.styles";
import { useDispatch, useSelector } from "react-redux";
import Progress from "../../components/Utils/Progress";
import { BiReset } from "react-icons/bi";
import { HiDocumentSearch } from "react-icons/hi";
import "./date.css";
import { fetchPurchaseHistorys } from "../../redux/purchaseHistoryApi";
import HistoryTable from "../../components/HistoryTable/HistoryTable";

const PurchaseHistory = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [sort, setSort] = useState("");
	const [term, setTerm] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	useEffect(() => {
		fetchPurchaseHistorys(dispatch);
	}, [dispatch]);

	const { purchaseHistoryList, isFetching_history } = useSelector((state) => state.purchaseHistorys);
	const [purchaseHistory, setPurchaseHistory] = useState(purchaseHistoryList);

	//Sort function
	useEffect(() => {
		if (sort === "createdAt") {
			setPurchaseHistory((prev) =>
				[...prev]
					.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
					.reverse()
			);
		} else if (sort === "cashier") {
			setPurchaseHistory((prev) =>
				[...prev].sort((a, b) => (a.cashier > b.cashier ? 1 : b.cashier > a.cashier ? -1 : 0))
			);
		} else if (sort === "total") {
			setPurchaseHistory((prev) => [...prev].sort((a, b) => a.totalAmt - b.totalAmt));
		} else if (sort === "default") {
			setPurchaseHistory(purchaseHistoryList);
		}
	}, [sort, purchaseHistoryList]);

	//Search function
	useEffect(() => {
		if (term) {
			setPurchaseHistory(
				purchaseHistoryList?.filter(
					(history) =>
						history.cashier?.toLowerCase().includes(term.toLowerCase()) ||
						history.totalAmt === parseInt(term)
				)
			);
		} else {
			setPurchaseHistory(purchaseHistoryList);
		}
	}, [term, purchaseHistoryList]);

	//Date filter function
	const handleFilter = () => {
		setPurchaseHistory((prev) =>
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
					Purchase History
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
							onClick={() => setPurchaseHistory(purchaseHistoryList)}
							style={{ marginLeft: 10 }}
						>
							<BiReset style={{ fontSize: 22, paddingRight: 5 }} /> Reset
						</button>
					</div>
				</Card>
				<HistoryTable history={purchaseHistory} type="receive" />
			</div>
		</>
	);
};

export default PurchaseHistory;
