import { Card, Typography, Container } from "@material-ui/core";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NewItem from "../../components/NewItem/NewItem";
import ReceiveItem from "../../components/ReceiveItem/ReceiveItem";

const useStyles = makeStyles((theme) => ({
	card: {
		width: "99%",
		height: "98%",
		justifyContent: "flex-start",
		margin: 0,
		padding: 0,
		overflow: "auto",
	},

	head: {
		fontSize: 20,
		padding: 0,
		color: theme.palette.primary.white,
	},
	wrapper: {
		display: "flex",
		width: "100%",
		height: "93%",
		alignItems: "flex-start",
		justifyContent: "space-between",
	},

	content: {
		backgroundColor: theme.palette.primary.lightBlue,
		color: theme.palette.primary.darkGray,
		padding: "0 20px",
	},
}));
const Inventory = () => {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.card}>
			<Container className={classes.content}>
				<Typography className={classes.head} variant="h6" component="h6" gutterBottom>
					Inventory
				</Typography>
			</Container>
			<Container className={classes.wrapper}>
				<ReceiveItem />
				<NewItem />
			</Container>
		</Card>
	);
};

export default Inventory;
