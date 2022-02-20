import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
	card: {
		width: "99%",
		height: "98%",
		justifyContent: "flex-start",
		margin: 0,
		padding: 10,
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
		padding: 0,
	},

	content: {
		backgroundColor: theme.palette.primary.lightBlue,
		color: theme.palette.primary.darkGray,
		padding: " 0 20px",
	},
}));
