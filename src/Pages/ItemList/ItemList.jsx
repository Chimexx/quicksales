import {
	Button,
	Typography,
	Container,
	TextField,
	CardActionArea,
	Card,
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./ItemList.styles";
import { convertMoney } from "../../components/Utils/converter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsApi";
import Progress from "../../components/Utils/Progress";
import { MdOutlinePostAdd } from "react-icons/md";
import { HiDocumentSearch } from "react-icons/hi";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import dayjs from "dayjs";

const ItemList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [sortValue, setSortValue] = useState("Item name");

	useEffect(() => {
		fetchProducts(dispatch);
	}, [dispatch]);

	const { productList, isFetching, error } = useSelector((state) => state.products);

	const searchData = productList?.filter(
		(product) =>
			product.itemName?.toLowerCase().includes(term.toLowerCase()) ||
			product.salesPrice === parseInt(term) ||
			product.vendor?.toLowerCase().includes(term.toLowerCase()) ||
			product.department?.toLowerCase().includes(term.toLowerCase())
	);

	const sortOptions = ["Item name", "Qty", "Sales price", "Date Added"];
	let List = searchData || productList;

	return (
		<>
			<div className={classes.container}>
				{isFetching && <Progress />}
				<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
					Item List
				</Typography>
				<Card className={classes.bar} variant="outlined">
					<div className={classes.buttonContainer}>
						<button className={classes.button}>
							<MdOutlinePostAdd className={classes.buttonIcon} />
							NEW ITEM
						</button>
					</div>

					<div className={classes.inputContainer}>
						<HiDocumentSearch className={classes.searchIcon} />
						<input
							type="text"
							className={classes.input}
							placeholder="Find Items"
							onChange={(e) => setTerm(e.target.value)}
							value={term}
						/>
					</div>
					<div className={classes.inputContainer} style={{ width: 250, justifyContent: "center" }}>
						<label htmlFor="sort" style={{ marginRight: 10 }}>
							Sort By:{" "}
						</label>
						<select name="" id="sort" className={classes.select}>
							{sortOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				</Card>
				<TableContainer component={Paper} className={classes.tableContainer}>
					<Table className={classes.table} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow className={classes.tableHead}>
								<TableCell className={classes.tableHead}>#</TableCell>
								<TableCell className={classes.tableHead}>Item Name</TableCell>
								<TableCell className={classes.tableHead}>Description</TableCell>
								<TableCell className={classes.tableHead}>Sales Price</TableCell>
								<TableCell className={classes.tableHead}>Cost Price</TableCell>
								<TableCell className={classes.tableHead}>Avail. Qty</TableCell>
								<TableCell className={classes.tableHead}>Wholesale Price</TableCell>
								<TableCell className={classes.tableHead}>Retail Price</TableCell>
								<TableCell className={classes.tableHead}>Dep</TableCell>
								<TableCell className={classes.tableHead}>Vendor</TableCell>
								<TableCell className={classes.tableHead}>Exp Date</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{List.map((row, index) => (
								<TableRow className={classes.tableBody} key={row._id}>
									<TableCell align="left">{index + 1}</TableCell>

									<TableCell component="th" scope="row">
										{row.itemName.length > 30
											? row.itemName.slice(0, 30) + "..."
											: row.itemName}
									</TableCell>
									<TableCell align="left">{row.description.slice(0, 40)}</TableCell>
									<TableCell align="right">{convertMoney(row.salesPrice)}</TableCell>
									<TableCell align="right">{convertMoney(row.costPrice)}</TableCell>
									<TableCell align="right">{row.availQty}</TableCell>
									<TableCell align="right">{convertMoney(row.wholesalePrice)}</TableCell>
									<TableCell align="right">{convertMoney(row.retailPrice)}</TableCell>
									<TableCell align="left">{row.department}</TableCell>
									<TableCell align="left">{row.vendor}</TableCell>
									<TableCell align="left">
										{row.expiryDate
											? dayjs(row.expiryDate).format("DD MMM, YYYY")
											: "- -"}
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

export default ItemList;
