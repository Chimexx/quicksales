import React, { useState } from "react";
import { Table, Info } from "./SalesList.styles";
import { BsDashLg, BsInfoCircleFill, BsPlusLg } from "react-icons/bs";
import { AiFillCaretUp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	addToSellCart,
	decQty,
	directInput,
	directPrice,
	getTotals,
	removeFromSellCart,
} from "../../redux/SellCartSlice";
import { CgOptions } from "react-icons/cg";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { convertMoney } from "../Utils/converter";
import { MdCancel } from "react-icons/md";

const SalesList = () => {
	const dispatch = useDispatch();

	const { sellCartItems } = useSelector((state) => state.sellCart);
	const [onHandQty, setOnHandQty] = useState(1);
	const [showInfo, setShowInfo] = useState(false);

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
		dispatch(removeFromSellCart(item));
		dispatch(getTotals());
	};
	const handlePrice = (item, value) => {
		if (isNaN(value)) {
			dispatch(directPrice({ item, value: "" }));
			dispatch(getTotals());
			setShowInfo(true);
		} else {
			dispatch(directPrice({ item, value }));
			dispatch(getTotals());
			setShowInfo(true);
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
						<th>Sales Price</th>
						<th>Ext Price</th>
						<th>Qty</th>
						<th>Avail Qty</th>
						<th>Cost Price</th>
						<th>Wsale Price</th>
						<th>Retail Price</th>
						<th>Custom Price</th>
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
							<td>
								₦
								<input
									type="number"
									value={item.salesPrice}
									min="1"
									onChange={(e) => handlePrice(item, parseInt(e.target.value))}
								/>
							</td>
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
							<td>{convertMoney(item.costPrice)}</td>
							<td>{convertMoney(item.wholesalePrice)}</td>
							<td>{convertMoney(item.retailPrice)}</td>
							<td>{convertMoney(item.customPrice)}</td>
						</tr>
					))}
				</tbody>
			</Table>
			{showInfo && (
				<Info>
					<AiFillCaretUp className="caret" />
					<div className="content">
						<BsInfoCircleFill className="info__icon" />
						<p>
							You have changed the default unit price of an item, Do ensure you know what you
							are doing.
						</p>
						<MdCancel className="cancel__icon" onClick={() => setShowInfo(false)} />
					</div>
				</Info>
			)}
		</>
	);
};

export default SalesList;
