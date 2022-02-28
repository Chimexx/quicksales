import {
	Button,
	Typography,
	Container,
	TextField,
	CardActionArea,
	Select,
	InputLabel,
	FormControl,
	MenuItem,
	Card,
	Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./SellItem.styles";
import { useDispatch, useSelector } from "react-redux";
import FilterDisplay from "../../components/FilterDisplay/FilterDisplay";
import Progress from "../../components/Utils/Progress";
import SalesList from "../../components/SalesList/SalesList";
import { clearSellCart, getTotals } from "../../redux/SellCartSlice";
import { convertMoney } from "../../components/Utils/converter";
import { fetchProducts } from "../../redux/productsApi";
import AddModal from "../../components/AddModal/AddModal";

const SellItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [type, setType] = useState("");

	const { sellCartTotalAmount, sellCartItems } = useSelector((state) => state.sellCart);
	const { vendorList } = useSelector((state) => state.vendors);

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
		dispatch(clearSellCart());
		dispatch(getTotals());
	};

	// const handleInventory = () => {
	// 	receiveInventory(buyCartItems, dispatch);
	// };

	return (
		<div className={classes.wrapper}>
			<Container className={classes.containerLeft}>
				<Container className={classes.new}>
					{isFetching && <Progress />}
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Make A Sale
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
						{term ? <FilterDisplay data={dataFilter()} action="sell" /> : null}
						<Container className={classes.table__container}>
							<SalesList />
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
							disabled={isFetching || sellCartItems?.length === 0}
							// onClick={handleInventory}
						>
							Save
						</Button>
						<Button
							size="small"
							className={classes.action__buttons}
							style={{ marginRight: 20 }}
							variant="outlined"
							color="primary"
							disabled={isFetching || sellCartItems?.length === 0}
							// onClick={handleInventory}
						>
							Save and Print
						</Button>
					</Container>
					<div
						className={classes.total_container}
						style={{ display: "flex", alignItems: "center", fontFamily: "Roboto" }}
					>
						<p className={classes.short}>Total:</p>
						<p className={classes.long}> {convertMoney(sellCartTotalAmount)}</p>
					</div>
				</CardActionArea>
			</Container>
			<Container className={classes.containerRight}>
				<Container className={classes.new}>
					{isFetching && <Progress />}
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Customer Info
					</Typography>
					<Container className={classes.inner__body}>
						<FormControl size="small" className={(classes.formControl, classes.new__input)}>
							<InputLabel id="demo-simple-select-label">Customer</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								// value={age}
								// onChange={handleChange}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirtyvnvnvnvn</MenuItem>
							</Select>
						</FormControl>
						<Card variant="outlined" className={classes.account}>
							<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
								Customer Balance:
							</Typography>
							<p className={classes.account_figure}>{convertMoney(5000)}</p>
						</Card>
						<Divider />
						<Button
							onClick={() => setModalOpen(true)}
							className={classes.add__buttons}
							size="small"
							variant="outlined"
							color="primary"
							style={{ marginTop: 20 }}
						>
							Add Customer
						</Button>
					</Container>
				</Container>
				{modalOpen && <AddModal type="customer" setModalOpen={setModalOpen} />}
			</Container>
		</div>
	);
};

export default SellItem;
