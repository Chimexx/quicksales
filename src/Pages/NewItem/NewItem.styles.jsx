import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
	new_head: {
		fontSize: 18,
		padding: "0 10px",
		color: theme.palette.primary.white,
		backgroundColor: theme.palette.primary.lightBlue,
		marginBottom: 0,
	},

	container: {
		display: "flex",
		padding: 0,
		borderRadius: "5px 5px 0 0",
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		background: "rgba(255, 255, 255, 0.5)",
		zIndex: 1000,
		justifyContent: "center",
		alignItems: "center",
		backdropFilter: "blur(5.5px)",
	},
	wrapper: {
		width: "40rem",
		height: "35rem",
		// color: var(--darkGray),
		backgroundColor: "white",
		borderRadius: "0.8rem",
		display: "flex",
		flexDirection: "column",
		overflow: "hidden",
		boxShadow: "rgba(131, 168, 247, 0.2) 0px 2px 8px 0px",
	},

	new: {
		width: "100%",
		height: "100%",
		color: theme.palette.primary.darkGray,
		padding: 0,
		margin: 0,
	},
	body: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 10,
		justifyContent: "space-between",
	},
	new__input: {
		width: "100%",
		marginBottom: "10px ",
	},
	new_small_input: {
		width: "100%",
		display: "grid",
		padding: 0,
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: 2,
	},
	actions: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.white,
		padding: 10,
	},
	action__buttons: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.white,

		"&:disabled": {
			backgroundColor: theme.palette.secondary.main,
		},
	},
	add__buttons: {
		backgroundColor: theme.palette.primary.white,
		color: theme.palette.primary.blueDeFrance,
	},
	progress: {
		backgroundColor: theme.palette.primary.saffron,
	},
}));
