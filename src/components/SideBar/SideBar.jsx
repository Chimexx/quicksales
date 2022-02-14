import { Button } from "@material-ui/core";
import React from "react";
// import { Button } from "../SideButton/SideButton.styles";
import { Container, Wrapper } from "./SideBar.styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			padding: theme.spacing(0.6, 4),
			fontSize: "20px",
		},
	},
}));

const SideBar = () => {
	const classes = useStyles();
	return (
		<Container>
			<Wrapper>
				<Button className={classes.root} size="large" variant="outlined" color="primary">
					Button
				</Button>
			</Wrapper>
		</Container>
	);
};

export default SideBar;
