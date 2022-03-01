import {
	Button,
	Typography,
	Container,
	TextField,
	CardActionArea,
	FormControl,
	InputLabel,
	Select,
	Divider,
	Card,
	MenuItem,
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

const ReceiveItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [vendor, setVendor] = useState({});

	const { buyCartTotalAmount, buyCartItems } = useSelector((state) => state.buyCart);
	const { vendorList, isFetching_ven } = useSelector((state) => state.vendors);

	const handleDispatch = () => {
		dispatch(clearBuyCart());
		dispatch(getTotals());
	};
	const handleInventory = () => {
		receiveInventory(buyCartItems, dispatch);
	};

	return (
		<>
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
				<CardActionArea className={classes.actions}>
					<Container>
						<Button
							size="small"
							className={classes.action__buttons}
							style={{ marginRight: 20 }}
							variant="outlined"
							color="primary"
							disabled={buyCartItems?.length === 0}
							onClick={handleInventory}
						>
							Receive Items
						</Button>
					</Container>
					<div
						className={classes.total_container}
						style={{ display: "flex", alignItems: "center", fontFamily: "Roboto" }}
					>
						<p className={classes.short}>Total:</p>
						<p className={classes.long}> {convertMoney(buyCartTotalAmount)}</p>
					</div>
				</CardActionArea>
			</Container>
			<Container className={classes.containerRight}>
				<Container className={classes.new}>
					{isFetching_ven && <Progress />}
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Customer Info
					</Typography>
					<Container className={classes.inner__body}>
						<FormControl size="small" className={(classes.formControl, classes.new__input)}>
							<InputLabel id="demo-simple-select-label">Vendor</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								onChange={(e) => setVendor(e.target.value)}
							>
								{vendorList.map((vendor) => (
									<MenuItem key={vendor._id} value={vendor}>
										{vendor.company.toUpperCase()}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<Card variant="outlined" className={classes.account}>
							<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
								Vendor Balance:
							</Typography>
							<p className={classes.account_figure}>{vendor.company}</p>
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
		</>
	);
};

export default ReceiveItem;
