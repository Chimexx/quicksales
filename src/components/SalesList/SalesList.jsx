import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import { Table } from "./SalesList.styles";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToSellCart, decQty, directInput, getTotals, removeFromSellCart } from "../../redux/SellCartSlice";
import { CgOptions } from "react-icons/cg";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { convertMoney } from "../Utils/converter";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	button: {
		fontSize: 12,
		width: 25,
		height: 30,
		padding: 0,
		minWidth: 30,
		margin: 0,
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

const SalesList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { sellCartItems } = useSelector((state) => state.sellCart);
	const [onHandQty, setOnHandQty] = useState(1);

	const handleQty = (item, action, value) => {
		setOnHandQty(item.onHandQty);
		if (action === "inc") {
			setOnHandQty(item.onHandQty + 1);
			dispatch(addToSellCart({ item, onHandQty }));
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
		dispatch(removeFromSellCart({ item }));
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
						<th>#</th>
						<th>Item Name</th>
						<th>Price</th>
						<th>Ext Price</th>
						<th>Qty</th>
						<th>Avail Qty</th>
						<th>Wholesale Price</th>
						<th>Retail Price</th>
					</tr>
				</thead>
				<tbody>
					{sellCartItems?.map((item, index) => (
						<tr key={item._id}>
							<td>
								<RiDeleteBack2Fill
									style={{ fontSize: 18, color: "#ff1818", cursor: "pointer" }}
									onClick={() => handleDelete(item)}
								/>
							</td>
							<td>{index + 1}</td>
							<td>{item.itemName}</td>
							<td>{convertMoney(item.salesPrice)}</td>
							<td>{convertMoney(item.salesPrice * item.onHandQty)}</td>
							<td className="button_col">
								<div className="actions_container">
									<button className="action_button" onClick={() => handleQty(item, "dec")}>
										<BsDashLg style={{ color: "inherit" }} />
									</button>

									<input
										type="number"
										value={item.onHandQty}
										min="1"
										onChange={(e) => handleQty(item, "dir", parseInt(e.target.value))}
									/>
									<button className="action_button" onClick={() => handleQty(item, "inc")}>
										<BsPlusLg style={{ color: "inherit" }} />
									</button>
								</div>
							</td>

							<td>{item.availQty}</td>
							<td>{convertMoney(item.wholesalePrice)}</td>
							<td>{convertMoney(item.retailPrice)}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default SalesList;
