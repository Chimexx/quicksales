import { Button } from "@material-ui/core";
import React from "react";
import { Container, Wrapper } from "./SideBar.styles";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	button: {
		padding: theme.spacing(0.6, 5),
		marginBottom: theme.spacing(2),
		fontSize: "20px",
		width: theme.spacing(25),
	},
}));

const SideBar = () => {
	const classes = useStyles();
	return (
		<Container>
			<Wrapper>
				<Link to="/home">
					<Button className={classes.button} size="large" variant="outlined" color="primary">
						Home
					</Button>
				</Link>
				<Link to="/inventory">
					<Button className={classes.button} size="large" variant="outlined" color="primary">
						Inventory
					</Button>
				</Link>
				<Link to="/items">
					<Button className={classes.button} size="large" variant="outlined" color="primary">
						Item list
					</Button>
				</Link>
				<Button className={classes.button} size="large" variant="outlined" color="primary">
					Button
				</Button>
			</Wrapper>
		</Container>
	);
};

export default SideBar;
