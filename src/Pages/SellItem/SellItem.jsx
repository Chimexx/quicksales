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
import { sellInventory } from "../../redux/productsApi";
import AddModal from "../../components/AddModal/AddModal";
import { fetchCustomers, updateCustomer } from "../../redux/customerApi";

const SellItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [customer, setCustomer] = useState({});
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		fetchCustomers(dispatch);
	}, [dispatch]);

	const { sellCartTotalAmount, sellCartItems } = useSelector((state) => state.sellCart);
	const { customerList, isFetching_customer } = useSelector((state) => state.customers);

	const handleDispatch = () => {
		dispatch(clearSellCart());
		dispatch(getTotals());
	};

	const handleMakeSale = () => {
		/* This is updating the customer's balance and sale status. */
		sellInventory({ items: sellCartItems }, dispatch);
		if (customer.firstName) {
			/* This is updating the customer's balance and sale status. */
			updateCustomer({ customer, total: sellCartTotalAmount, sale: true }, dispatch);
		}
	};

	return (
		<div className={classes.wrapper}>
			<Container className={classes.containerLeft}>
				<Container className={classes.new}>
					{isFetching_customer && <Progress />}
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
						{term ? <FilterDisplay term={term} action="sell" /> : null}
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
							disabled={isFetching_customer || sellCartItems?.length === 0}
							onClick={handleMakeSale}
						>
							Save
						</Button>
						<Button
							size="small"
							className={classes.action__buttons}
							style={{ marginRight: 20 }}
							variant="outlined"
							color="primary"
							disabled={isFetching_customer || sellCartItems?.length === 0}
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
					{isFetching_customer && <Progress />}
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Customer Info
					</Typography>
					<Container className={classes.inner__body}>
						<FormControl size="small" className={(classes.formControl, classes.new__input)}>
							<InputLabel id="demo-simple-select-label">Customer</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								onChange={(e) => setCustomer(e.target.value)}
							>
								{customerList.map((customer) => (
									<MenuItem key={customer._id} value={customer}>
										{customer.firstName.toUpperCase()}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<Card variant="outlined" className={classes.account}>
							<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
								Customer Balance:
							</Typography>
							<p className={classes.account_figure}>{convertMoney(customer?.balance)}</p>
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
