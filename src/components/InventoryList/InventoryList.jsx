import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import { Table } from "./InventoryList.styles";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToBuyCart, decQty, directInput, getTotals, removeFromBuyCart } from "../../redux/BuyCartSlice";
import { CgOptions } from "react-icons/cg";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { convertMoney } from "../Utils/converter";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	actions: {
		backgroundColor: theme.palette.primary.blueDeFrance2,
		color: theme.palette.primary.white,
		padding: 1,
		borderRadius: 5,
	},
	button: {
		fontSize: 18,
		width: 25,
		height: 30,
		padding: 0,
	},
	editbutton: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.primary.white,
	},
	btngrp: {
		marginTop: theme.spacing(0),
		borderColor: "#bebebe",

		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(2),
		},
	},
}));

const InventoryList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { buyCartItems } = useSelector((state) => state.buyCart);
	const [onHandQty, setOnHandQty] = useState(1);

	const handleQty = (item, action, value) => {
		setOnHandQty(item.onHandQty);
		if (action === "inc") {
			setOnHandQty(item.onHandQty + 1);
			dispatch(addToBuyCart({ item, onHandQty }));
			dispatch(getTotals());
		}
		if (action === "dec") {
			if (onHandQty < 1) {
				setOnHandQty(1);
			} else {
				setOnHandQty(item.onHandQty - 1);
				dispatch(decQty({ item, onHandQty }));
			}
			dispatch(getTotals());
		}
		if (action === "dir") {
			if (value === null || isNaN(value) || value < 1) {
				setOnHandQty(1);
				dispatch(directInput({ item, value: 1 }));
			} else {
				setOnHandQty(value);
				dispatch(directInput({ item, value }));
			}
			dispatch(getTotals());
		}
	};
	const handleDelete = (item) => {
		dispatch(removeFromBuyCart({ item }));
		dispatch(getTotals());
	};

	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>
							<CgOptions style={{ fontSize: 18 }} />
						</th>
						<th>Item Name</th>
						<th>Price</th>
						<th>Cost</th>
						<th>OH Qty</th>
						<th>Ext Cost </th>
						<th>Avail Qty</th>
						<th>Wholesale Price</th>
						<th>Retail Price</th>
						<th>Extra Action</th>
					</tr>
				</thead>
				<tbody>
					{buyCartItems?.map((item) => (
						<tr key={item._id}>
							<td>
								<RiDeleteBack2Fill
									style={{ fontSize: 18, color: "#ff8585", cursor: "pointer" }}
									onClick={() => handleDelete(item)}
								/>
							</td>
							<td>{item.itemName}</td>
							<td>{convertMoney(item.salesPrice)}</td>
							<td>{convertMoney(item.costPrice)}</td>
							<td className="button-col">
								<Container className={classes.actions}>
									<Button className={classes.button} onClick={() => handleQty(item, "dec")}>
										<BsDashLg color="rgba(255,255,255, 0.9)" />
									</Button>

									<input
										type="number"
										value={item.onHandQty}
										min="1"
										onChange={(e) => handleQty(item, "dir", parseInt(e.target.value))}
									/>

									<Button className={classes.button} onClick={() => handleQty(item, "inc")}>
										<BsPlusLg color="rgba(255,255,255, 0.9)" />
									</Button>
								</Container>
							</td>

							<td>{convertMoney(item.costPrice * item.onHandQty)}</td>
							<td>{item.availQty}</td>
							<td>{convertMoney(item.wholesalePrice)}</td>
							<td>{convertMoney(item.retailPrice)}</td>
							<td>
								<Link to="/">
									<Button
										className={classes.editbutton}
										size="small"
										variant="outlined"
										color="primary"
									>
										Edit
									</Button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default InventoryList;
