import { Button, Typography, Container, TextField, CardActionArea } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./ReceiveItem.styles";
import InventoryList from "../InventoryList/InventoryList";
import FilterDisplay from "../FilterDisplay/FilterDisplay";
import { convertMoney } from "../Utils/converter";
import { clearBuyCart, getTotals } from "../../redux/BuyCartSlice";
import { useDispatch, useSelector } from "react-redux";
import Progress from "../Utils/Progress";

const data = [
	{
		_id: 0,
		name: "Ciprofloxacin",
		ohq: 1,
		description: "Ciprotab 500mg ",
		salesPrice: 2000,
		costPrice: 1500,
		availQty: 20,
		wholesalePrice: 1700,
		customPrice: 1900,
	},
	{
		_id: 1,
		name: "Paracetamol",
		ohq: 1,
		description: "Paracetamol 100mg",
		salesPrice: 100,
		costPrice: 70,
		availQty: 200,
		wholesalePrice: 70,
		customPrice: 95,
	},
	{
		_id: 2,
		name: "Gentamycin",
		ohq: 1,
		description: "Gentamycin inj 60mg",
		salesPrice: 300,
		costPrice: 200,
		availQty: 90,
		wholesalePrice: 250,
		customPrice: 290,
	},
	{
		_id: 3,
		name: "Ceftriaxone inj",
		ohq: 1,
		description: "Ceftriaxone inj 60mg",
		salesPrice: 600,
		costPrice: 450,
		availQty: 120,
		wholesalePrice: 500,
		customPrice: 550,
	},
];

const ReceiveItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [loading, setLoading] = useState(false);
	const { buyCartTotalAmount } = useSelector((state) => state.buyCart);

	const dataFilter = () =>
		data.filter(
			(key) => key.name.toLowerCase().includes(term.toLowerCase()) || key.age === parseInt(term)
		);

	const handleDispatch = () => {
		dispatch(clearBuyCart());
		dispatch(getTotals());
	};

	return (
		<Container className={classes.containerLeft} style={{ height: "100%" }}>
			<Container className={classes.new}>
				{loading && <Progress />}
				<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
					Receive Item
				</Typography>
				<Container className={classes.inner__body}>
					<TextField
						className={classes.new__input}
						id="filled-basic"
						variant="filled"
						fullWidth={true}
						size="small"
						value={term}
						autoComplete="off"
						onChange={(e) => setTerm(e.target.value)}
						placeholder="Find Items"
					/>
					{term ? <FilterDisplay data={dataFilter()} /> : null}
					<Container className={classes.table__container}>
						<InventoryList />
						<Button
							size="small"
							variant="outlined"
							color="secondary"
							style={{ marginTop: 5, marginBottom: 5 }}
							onClick={handleDispatch}
						>
							clear all
						</Button>
					</Container>
				</Container>
			</Container>
			<CardActionArea className={classes.actions}>
				<Container>
					<Button
						size="small"
						className={classes.action__buttons}
						style={{ marginRight: 20 }}
						variant="outlined"
						color="primary"
					>
						Receive Item
					</Button>
				</Container>
				<Container style={{ display: "flex", alignItems: "center", fontFamily: "Roboto" }}>
					<p className={classes.total_field}>Total:</p>
					<Container className={classes.totals}>
						<p className={classes.total_field}> {convertMoney(buyCartTotalAmount)}</p>
					</Container>
				</Container>
			</CardActionArea>
		</Container>
	);
};

export default ReceiveItem;
