import {
	Button,
	Typography,
	Container,
	TextField,
	Divider,
	Card,
	MenuItem,
	Menu,
	CardActions,
	Checkbox,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./ReceiveItem.styles";
import { clearBuyCart, getTotals } from "../../redux/BuyCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { receiveInventory } from "../../redux/productsApi";
import FilterDisplay from "../../components/FilterDisplay/FilterDisplay";
import InventoryList from "../../components/InventoryList/InventoryList";
import { convertMoney } from "../../components/Utils/converter";
import AddModal from "../../components/AddModal/AddModal";
import Progress from "../../components/Utils/Progress";
import { fetchVendors, updateVendor } from "../../redux/vendorsApi";
import { createPurchaseHistory } from "../../redux/purchaseHistoryApi";

const ReceiveItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [vendor, setVendor] = useState({});
	const [checked, setChecked] = useState(false);

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (vendor) => {
		setVendor(vendor);
		setAnchorEl(null);
	};

	const { buyCartTotalAmount, buyCartItems } = useSelector((state) => state.buyCart);
	const { vendorList, isFetching_vendor } = useSelector((state) => state.vendors);

	const handleDispatch = () => {
		dispatch(clearBuyCart());
		dispatch(getTotals());
	};

	useEffect(() => {
		fetchVendors(dispatch);
	}, [dispatch, vendor]);
	/**
	 * Receive the inventory and create a purchase history
	 */
	const handleInventory = () => {
		receiveInventory(buyCartItems, dispatch);
		createPurchaseHistory({ items: buyCartItems, totalAmt: buyCartTotalAmount, vendor }, dispatch);

		if (vendor.company && !checked) {
			const accountItem = { items: buyCartItems, amount: buyCartTotalAmount };
			updateVendor({ vendor, total: buyCartTotalAmount, buy: true, accountItem }, dispatch);
			fetchVendors(dispatch);
		}
	};
	console.log(vendor);
	return (
		<div className={classes.wrapper}>
			<Container className={classes.containerLeft}>
				<Container className={classes.new}>
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
						{term ? <FilterDisplay term={term} action="receive" /> : null}
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
				<CardActions className={classes.actions}>
					<Container>
						<Button
							size="small"
							className={classes.action__buttons}
							style={{ marginRight: 20 }}
							variant="outlined"
							color="primary"
							disabled={isFetching_vendor || buyCartItems?.length === 0}
							onClick={handleInventory}
						>
							Receive Items
						</Button>
						<Button
							size="small"
							className={classes.action__buttons}
							style={{ marginRight: 20 }}
							variant="outlined"
							color="primary"
							disabled={isFetching_vendor || buyCartItems?.length === 0}
							// onClick={handleInventory}
						>
							Receive and Print
						</Button>
					</Container>
					<div
						className={classes.total_container}
						style={{ display: "flex", alignItems: "center", fontFamily: "Roboto" }}
					>
						<p className={classes.short}>Total:</p>
						<p className={classes.long}> {convertMoney(buyCartTotalAmount)}</p>
					</div>
				</CardActions>
			</Container>
			<Container className={classes.containerRight}>
				<Container className={classes.new}>
					{isFetching_vendor && <Progress />}
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Vendor Info
					</Typography>
					<div className={classes.inner__body__container}>
						<Container className={classes.inner__body}>
							<Button
								aria-controls="simple-menu"
								aria-haspopup="true"
								style={{ marginBottom: 10, width: "100%" }}
								onClick={handleClick}
								variant="outlined"
								color="primary"
							>
								Select Vendor
							</Button>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								{vendorList.map((vendor) => (
									<MenuItem
										onClick={(e) => handleClose(vendor)}
										key={vendor._id}
										value={vendor}
									>
										{vendor.company.toUpperCase()}
									</MenuItem>
								))}
							</Menu>

							<Card variant="outlined" className={classes.account}>
								<Typography
									variant="h6"
									className={classes.new_head}
									component="h6"
									gutterBottom
								>
									Vendor Account:
								</Typography>
								<div className={classes.account_container}>
									<p className={classes.account_name}>
										{vendor?.company?.length > 9
											? vendor?.company?.slice(0, 8) + "..."
											: vendor?.company}
									</p>

									<p className={classes.account_figure}>
										{vendor?.balance ? convertMoney(vendor.balance) : "--"}
									</p>
								</div>
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
								Add vendor
							</Button>
							<Divider />
							<Container className={classes.info_display}>
								<Checkbox
									disabled={!vendor.company}
									checked={vendor.company ? checked : true}
									className={classes.check}
									color="primary"
									inputProps={{ "aria-label": "checkbox with default color" }}
									onChange={(e) => setChecked(e.target.checked)}
								/>
								<p className={classes.check__info}>Mark these items as paid</p>
							</Container>
						</Container>
					</div>
				</Container>
				{modalOpen && <AddModal type="vendor" setModalOpen={setModalOpen} />}
			</Container>
		</div>
	);
};

export default ReceiveItem;
