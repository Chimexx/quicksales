import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import { Table } from "./InventoryList.styles";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToBuyCart, decQty, getBuyCart, clearBuyCart } from "../../redux/BuyCartSlice";
// import { removeFromBuyCart } from "../../redux/BuyCartSlice";

const useStyles = makeStyles((theme) => ({
	actions: {
		backgroundColor: theme.palette.primary.blueDeFrance2,
		color: theme.palette.primary.white,
		padding: 5,
		borderRadius: 5,
	},
	button: {
		fontSize: 18,
		width: 25,
		height: 30,
		padding: 0,
	},
	editbutton: {
		color: theme.palette.primary.white,
		backgroundColor: theme.palette.primary.green,
	},
	btngrp: {
		marginTop: theme.spacing(0),
		borderColor: "#bebebe",

		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(2),
		},
	},
}));

const InventoryList = ({ inventory, setInventory }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [ohq, setOhq] = useState(1);

	const handleDecrease = (item) => {
		dispatch(decQty(item));
	};

	const handleIncrease = (item) => {
		dispatch(addToBuyCart(item));
	};
	// const handleclearCart = () => {
	// 	dispatch(clearCart());
	// 	dispatch(getTotals());

	// };

	// const handleQuantity = (action, item) => {
	// 	if (action === "inc") {
	// 		setOhq(ohq + 1);
	// 	}
	// 	if (action === "dec") {
	// 		if (ohq === 1) {
	// 			setOhq(1);
	// 		} else {
	// 			setOhq(ohq - 1);
	// 		}
	// 	}
	// };
	return (
		<>
			<Table>
				<tr>
					<th>Item Name</th>
					<th>Price</th>
					<th>Cost</th>
					<th>OH Qty</th>
					<th>Ext Cost </th>
					<th>Avail Qty</th>
					<th>Wholesale Price</th>
					<th>Custom Price</th>
					<th>Extra Action</th>
				</tr>
				{inventory?.map((item) => (
					<tr>
						<td>{item.name}</td>
						<td>₦ {item.salesPrice}</td>
						<td>₦ {item.costPrice}</td>
						<td className="button-col">
							<Container className={classes.actions}>
								<Button className={classes.button} onClick={() => handleDecrease(item)}>
									<BsDashLg color="rgba(255,255,255, 0.9)" />
								</Button>

								<input
									type="text"
									value={item.ohq}
									onChange={(e) => setOhq(e.target.value)}
									// defaultValue={item.ohq}
								/>

								<Button className={classes.button} onClick={() => handleIncrease(item)}>
									<BsPlusLg color="rgba(255,255,255, 0.9)" />
								</Button>
							</Container>
						</td>
						<td>₦ {item.costPrice * ohq}</td>
						<td>{item.availQty}</td>
						<td>₦ {item.wholesalePrice}</td>
						<td>₦ {item.customPrice}</td>
						<td>
							<Button className={classes.editbutton} size="small" variant="outlined">
								Edit Item
							</Button>
						</td>
					</tr>
				))}
			</Table>
		</>
	);
};

export default InventoryList;
