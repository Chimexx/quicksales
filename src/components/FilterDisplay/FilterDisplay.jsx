import { Card, Container, Divider } from "@material-ui/core";
import React from "react";
import { Item } from "./FilterDisplay.styles";
import { useDispatch } from "react-redux";
import { addToBuyCart, decQty, getBuyCart, clearBuyCart } from "../../redux/BuyCartSlice";

const FilterDisplay = ({ data, inventory, setInventory }) => {
	const dispatch = useDispatch();

	const handleAddtoList = (item) => {
		dispatch(addToBuyCart(item));
	};

	return (
		<Card style={{ maxHeight: 100, overflow: "auto" }}>
			<Container style={{ padding: 10 }}>
				{data?.map((item) => (
					<div key={item.id}>
						<Item onClick={(e) => handleAddtoList(item)}>
							<p className="name">{item.name}</p>
							<p>{item.description}</p>
							<p>₦{item.price}</p>
							<p>{item.availQty}</p>
						</Item>
						<Divider />
					</div>
				))}
			</Container>
		</Card>
	);
};

export default FilterDisplay;
