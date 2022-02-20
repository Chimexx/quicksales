import { Card, Container, Divider, Typography } from "@material-ui/core";
import React from "react";
import { Item } from "./FilterDisplay.styles";
import { useDispatch } from "react-redux";
import { addToBuyCart, getTotals } from "../../redux/BuyCartSlice";
import { MdErrorOutline } from "react-icons/md";

const FilterDisplay = ({ data }) => {
	const dispatch = useDispatch();
	console.log(data);

	const handleAddToList = (item, id) => {
		dispatch(addToBuyCart({ item, id }));
		dispatch(getTotals());
	};
	if (data.length === 0) {
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
					{data?.map((item) => (
						<div key={item._id}>
							<Item onClick={(e) => handleAddToList(item, item._id)}>
								<h4 className="name">{item.name.slice(0, 22)}</h4>
								<p className="desc">{item.description.slice(0, 22)} ...</p>
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
