import {
	Button,
	Typography,
	Container,
	TextField,
	MenuItem,
	Card,
	Divider,
	Menu,
	CardActions,
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
import { createSalesHistory } from "../../redux/salesHistoryApi";
import { FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";

const SellItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [customer, setCustomer] = useState({});
	const [modalOpen, setModalOpen] = useState(false);

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (customer) => {
		setCustomer(customer);
		setAnchorEl(null);
	};

	useEffect(() => {
		fetchCustomers(dispatch);
	}, [dispatch, customer]);

	const { sellCartTotalAmount, sellCartItems } = useSelector((state) => state.sellCart);
	const { customerList, isFetching_customer } = useSelector((state) => state.customers);

	const handleDispatch = () => {
		dispatch(clearSellCart());
		dispatch(getTotals());
	};

	const entity = {
		totalCredited: sellCartTotalAmount,
		date: new Date(),
	};

	const handleMakeSale = () => {
		/* This is updating the customer's balance and sale status. */
		sellInventory({ items: sellCartItems }, dispatch);
		createSalesHistory({ items: sellCartItems, totalAmt: sellCartTotalAmount, customer }, dispatch);
		if (customer.firstName) {
			/* This is updating the customer's balance and sale status. */
			updateCustomer({ customer, entity, type: "credit" }, dispatch);
			fetchCustomers(dispatch);
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
						<div className={classes.input_container}>
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
							<FiDelete className={classes.clear} onClick={() => setTerm("")} />
						</div>
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
				<CardActions className={classes.actions}>
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
							Sell only
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
							Sell and Print
						</Button>
					</Container>
					<div
						className={classes.total_container}
						style={{ display: "flex", alignItems: "center", fontFamily: "Roboto" }}
					>
						<p className={classes.short}>Total:</p>
						<p className={classes.long}> {convertMoney(sellCartTotalAmount)}</p>
					</div>
				</CardActions>
			</Container>
			<Container className={classes.containerRight}>
				<Container className={classes.new}>
					{isFetching_customer && <Progress />}
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Customer Info
					</Typography>
					<Container className={classes.inner__body}>
						<Button
							aria-controls="simple-menu"
							aria-haspopup="true"
							style={{ marginBottom: 10, width: "100%" }}
							onClick={handleClick}
							variant="outlined"
							color="primary"
						>
							Select Customer
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							{customerList.map((customer) => (
								<MenuItem
									onClick={(e) => handleClose(customer)}
									key={customer._id}
									value={customer}
								>
									{customer.firstName.toUpperCase()}
								</MenuItem>
							))}
						</Menu>
						<Card variant="outlined" className={classes.account}>
							<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
								Customer Balance:
							</Typography>

							<div className={classes.account_container}>
								<p className={classes.account_name}>
									{customer?.firstName?.length > 9
										? customer?.firstName?.slice(0, 8) + "..."
										: customer?.firstName}
								</p>

								<p className={classes.account_figure}>
									{customer?.balance ? convertMoney(customer.balance) : "--"}
								</p>
							</div>
						</Card>
						<Divider />
						<Button
							onClick={() => setModalOpen(true)}
							className={classes.add__buttons}
							size="small"
							fullWidth={true}
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
