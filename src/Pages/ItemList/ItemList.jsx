import { Button, Typography, Container, TextField, CardActionArea, Card, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./ItemList.styles";
import { convertMoney } from "../../components/Utils/converter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsApi";
import Progress from "../../components/Utils/Progress";
import { BiSearchAlt } from "react-icons/bi";
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

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ItemList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");

	useEffect(() => {
		fetchProducts(dispatch);
	}, [dispatch]);

	const { productList, isFetching, error } = useSelector((state) => state.products);

	let List;

	const searchData = productList?.filter(
		(product) =>
			product.itemName?.toLowerCase().includes(term.toLowerCase()) ||
			product.salesPrice === parseInt(term) ||
			product.vendor?.toLowerCase().includes(term.toLowerCase())
	);

	searchData ? (List = searchData) : (List = productList);

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
				</Card>
				<TableContainer component={Paper} className={classes.tableContainer}>
					<Table className={classes.table} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow className={classes.tableHead}>
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
							{List.map((row) => (
								<TableRow className={classes.tableBody} key={row._id}>
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
