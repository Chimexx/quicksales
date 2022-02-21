import { Container } from "@material-ui/core";
import { useStyles } from "./Inventory.styles";
import React from "react";
import NewItem from "../../components/NewItem/NewItem";
import ReceiveItem from "../../components/ReceiveItem/ReceiveItem";

const Inventory = () => {
	const classes = useStyles();

	return (
		<Container className={classes.wrapper}>
			<ReceiveItem />
			<NewItem />
		</Container>
	);
};

export default Inventory;
