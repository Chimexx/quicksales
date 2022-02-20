import { Card, Container } from "@material-ui/core";
import { useStyles } from "./Inventory.styles";
import React from "react";
// import NewItem from "../../components/NewItem/NewItem";
import ReceiveItem from "../../components/ReceiveItem/ReceiveItem";
import Form from "../../components/NewItem/Form";

const Inventory = () => {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.card}>
			{/* <Container className={classes.content}>
				<Typography className={classes.head} variant="h6" component="h6" gutterBottom>
					Inventory
				</Typography>
			</Container> */}
			<Container className={classes.wrapper}>
				<ReceiveItem />
				<Form />
				{/* <NewItem /> */}
			</Container>
		</Card>
	);
};

export default Inventory;
