import React, { useState } from "react";
import { Table } from "./InventoryList.styles";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
	addToBuyCart,
	decQty,
	directCost,
	directInput,
	getTotals,
	removeFromBuyCart,
} from "../../redux/BuyCartSlice";
import { CgOptions } from "react-icons/cg";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { convertMoney } from "../Utils/converter";

const InventoryList = () => {
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
	const handleCost = (item, value) => {
		if (isNaN(value)) {
			dispatch(directCost({ item, value: "" }));
			dispatch(getTotals());
		} else {
			dispatch(directCost({ item, value }));
			dispatch(getTotals());
		}
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
						<th>Cost</th>
						<th>Ext Cost </th>
						<th>OH Qty</th>
						<th>Avail Qty</th>
						<th>Sales Price</th>
						<th>Wsale Price</th>
						<th>Retail Price</th>
						<th>Custom Price</th>
					</tr>
				</thead>
				<tbody>
					{buyCartItems?.map((item, index) => (
						<tr key={item._id}>
							<td>
								<RiDeleteBack2Fill
									style={{ fontSize: 18, color: "#ff1818", cursor: "pointer" }}
									onClick={() => handleDelete(item)}
								/>
							</td>
							<td>{index + 1}</td>
							<td>{item.itemName}</td>
							<td>
								₦
								<input
									type="number"
									value={item.costPrice}
									min="1"
									onChange={(e) => handleCost(item, parseInt(e.target.value))}
								/>
							</td>
							<td>{convertMoney(item.costPrice * item.onHandQty)}</td>
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
							<td>{convertMoney(item.salesPrice)}</td>
							<td>{convertMoney(item.wholesalePrice)}</td>
							<td>{convertMoney(item.retailPrice)}</td>
							<td>{convertMoney(item.customPrice)}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default InventoryList;
