import React from "react";
import { BsReceiptCutoff } from "react-icons/bs";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		padding: theme.spacing(2),
		display: "grid",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		backgroundColor: theme.button.default.white,

		"&:hover": {
			backgroundColor: theme.button.secondary.bg1,
			boxShadow: "none",
		},
	},
}));

const Action = ({ title }) => {
	const classes = useStyles();
	return (
		<>
			<Button variant="contained" className={classes.button}>
				<BsReceiptCutoff
					style={{ marginLeft: "24%", fontSize: "50px", color: "rgba(1, 142, 244, 0.2)" }}
				/>

				<p
					style={{
						color: "#3d5563",
						marginTop: "10px",
						backgroundColor: "#f6f9ff",
						padding: "3px 10px",
						borderRadius: "5px",
					}}
				>
					{title}
				</p>
			</Button>
		</>
	);
};

export default Action;
