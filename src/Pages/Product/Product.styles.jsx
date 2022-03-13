import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	wrapper: {
		width: "100%",
		position: "relative",
	},
	container: {
		position: "absolute",
		top: "2rem",
		left: "10%",
		right: "10%",
	},
	new: {
		padding: 0,
		margin: 0,
	},
	body: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "0",
		paddingBottom: "1rem",
	},
	new_small_input: {
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: 10,
	},
	header: {
		background: theme.palette.primary.lightBlue,
		borderRadius: 5,
		overflow: "hidden",
		marginBottom: 10,
	},
	title: {
		fontSize: "1.3rem",
		padding: "5px 24px",
		margin: 0,
		color: theme.palette.primary.white,
	},
	actions: {
		display: "flex",
		justifyContent: "space-between",
		padding: "1rem",
		borderRadius: 5,
		background: theme.palette.primary.bg3,
	},
	action__buttons: {
		marginRight: "1rem",
	},
	delete__button: {
		color: theme.palette.primary.red,
		borderColor: theme.palette.primary.red,
	},
	date: {
		height: 48,
		width: "100%",
		padding: "0px 2rem",
		border: "none",
		background: "#e2e2e8",
		borderRadius: 3,
		fontSize: "1.2rem",
	},
}));
