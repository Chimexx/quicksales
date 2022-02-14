import React from "react";
import { BsReceiptCutoff } from "react-icons/bs";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			padding: theme.spacing(1),
			display: "flex",
			flexDirection: "column",
		},
	},
}));

const Action = () => {
	const classes = useStyles();
	return (
		<>
			<Button variant="contained" className={classes.root} color="secondary">
				<BsReceiptCutoff style={{ fontSize: "50px", color: "rgba(1, 142, 244, 0.2)" }} />
				<p style={{ color: "#3d5563", marginTop: "10px" }}>MAKE A SALE</p>
			</Button>
		</>
	);
};

export default Action;
