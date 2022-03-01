import { Card, Container, Divider, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Item } from "./FilterDisplay.styles";
import { useDispatch, useSelector } from "react-redux";
import { addToBuyCart, getTotals as BuyTotals } from "../../redux/BuyCartSlice";
import { addToSellCart, getTotals as SellTotals } from "../../redux/SellCartSlice";
import { MdErrorOutline } from "react-icons/md";
import { fetchProducts } from "../../redux/productsApi";

const FilterDisplay = ({ term, action }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		fetchProducts(dispatch);
	}, [dispatch]);
	const { productList } = useSelector((state) => state.products);

	const list = productList?.filter(
		(product) =>
			product.itemName.toLowerCase().includes(term.toLowerCase()) ||
			product.salesPrice === parseInt(term)
	);

	const handleAddToList = (item, id) => {
		if (action === "receive") {
			dispatch(addToBuyCart({ item, id }));
			dispatch(BuyTotals());
		} else if (action === "sell") {
			if (item.availQty > 0) {
				dispatch(addToSellCart({ item, id }));
				dispatch(SellTotals());
			}
		}
	};

	if (list.length === 0) {
		return (
			<Card style={{ maxHeight: 100, overflow: "auto", padding: 0, margin: 0 }}>
				<Container
					style={{
						backgroundColor: "#fddcdc",
						padding: 10,
						margin: 0,
						display: "flex",
						alignItems: "center",
					}}
				>
					<MdErrorOutline
						style={{
							color: "#ff0202",
							fontSize: "35px",
							padding: "5px",
						}}
					/>
					<Typography variant="h6">No Items Found</Typography>
				</Container>
			</Card>
		);
	} else {
		return (
			<Card style={{ maxHeight: 100, overflow: "auto" }}>
				<Container style={{ padding: 10 }}>
					{list?.map((item) => (
						<div key={item._id} item={item}>
							<Item qty={item.availQty} onClick={() => handleAddToList(item, item._id)}>
								<p className="name">
									{item.itemName.length > 22
										? item.itemName.slice(0, 22) + "..."
										: item.itemName}
								</p>
								<p className="desc">
									{item.description.length > 22
										? item.description.slice(0, 22) + "..."
										: item.description}
								</p>
								<p className="price">₦{item.salesPrice}</p>
								<p>{item.availQty}</p>
							</Item>
							<Divider />
						</div>
					))}
				</Container>
			</Card>
		);
	}
};

export default FilterDisplay;
