import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
	new_head: {
		fontSize: 18,
		padding: "0 10px",
		color: theme.palette.primary.white,
		backgroundColor: theme.palette.primary.lightBlue,
		marginBottom: 0,
	},

	containerRight: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "35%",
		padding: 0,
		height: "100%",
		borderRadius: "5px 5px 0 0",
		border: `1px solid ${theme.palette.secondary.main}`,
	},

	new: {
		width: "100%",
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
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.blueDeFrance,
	},
	progress: {
		backgroundColor: theme.palette.primary.saffron,
	},
}));
