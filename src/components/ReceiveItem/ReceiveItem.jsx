import { Button, Typography, Container, TextField, CardActionArea } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./ReceiveItem.styles";
import InventoryList from "../InventoryList/InventoryList";
import FilterDisplay from "../FilterDisplay/FilterDisplay";
import { convertMoney } from "../Utils/converter";
import { clearBuyCart, getTotals } from "../../redux/BuyCartSlice";
import { useDispatch, useSelector } from "react-redux";
import Progress from "../Utils/Progress";
import { fetchProducts, receiveInventory } from "../../redux/productsApi";

const ReceiveItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const { buyCartTotalAmount, buyCartItems } = useSelector((state) => state.buyCart);

	useEffect(() => {
		fetchProducts(dispatch);
	}, [dispatch]);

	const { productList, isFetching, error } = useSelector((state) => state.products);

	const dataFilter = () =>
		productList?.filter(
			(product) =>
				product.itemName.toLowerCase().includes(term.toLowerCase()) ||
				product.salesPrice === parseInt(term)
		);

	const handleDispatch = () => {
		dispatch(clearBuyCart());
		dispatch(getTotals());
	};
	const handleInventory = () => {
		receiveInventory(buyCartItems, dispatch);
	};

	return (
		<Container className={classes.containerLeft}>
			<Container className={classes.new}>
				{isFetching && <Progress />}
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
						disabled={isFetching || buyCartItems?.length === 0}
						onClick={handleInventory}
					>
						Receive Items
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
