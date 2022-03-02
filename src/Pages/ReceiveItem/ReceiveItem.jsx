import {
	Button,
	Typography,
	Container,
	TextField,
	CardActionArea,
	Divider,
	Card,
	MenuItem,
	Menu,
	CardActions,
} from "@material-ui/core";
import React, { useState } from "react";
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

const ReceiveItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [vendor, setVendor] = useState({});

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (vendor) => {
		setVendor(vendor);
		setAnchorEl(null);
	};

	const { buyCartTotalAmount, buyCartItems } = useSelector((state) => state.buyCart);
	const { vendorList, isFetching_ven } = useSelector((state) => state.vendors);

	const handleDispatch = () => {
		dispatch(clearBuyCart());
		dispatch(getTotals());
	};
	const handleInventory = () => {
		receiveInventory(buyCartItems, dispatch);
		if (vendor.company) {
			updateVendor({ vendor, total: buyCartTotalAmount, buy: true }, dispatch);
			fetchVendors(dispatch);
		}
	};

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
							disabled={isFetching_ven || buyCartItems?.length === 0}
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
							disabled={isFetching_ven || buyCartItems?.length === 0}
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
					{isFetching_ven && <Progress />}
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Vendor Info
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
							<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
								Vendor Balance:
							</Typography>
							<p className={classes.account_figure}>
								{vendor?.balance ? convertMoney(vendor.balance) : "--"}
							</p>
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
					</Container>
				</Container>
				{modalOpen && <AddModal type="vendor" setModalOpen={setModalOpen} />}
			</Container>
		</div>
	);
};

export default ReceiveItem;
