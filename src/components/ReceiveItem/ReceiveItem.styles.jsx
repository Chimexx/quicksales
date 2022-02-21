import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	new_head: {
		fontSize: 18,
		padding: "0 10px",
		color: theme.palette.primary.white,
		backgroundColor: theme.palette.primary.lightBlue,
		marginBottom: 0,
	},

	containerLeft: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "65%",
		padding: 0,
		height: "100%",
		borderRadius: "5px 5px 0 0",
		border: `1px solid ${theme.palette.secondary.main}`,
		marginRight: 20,
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
		padding: 0,
		height: "100%",
		justifyContent: "space-between",
	},
	inner__body: {
		padding: 10,
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
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.white,
		padding: 10,
	},
	table__container: {
		maxHeight: 300,
		width: "100%",
		padding: 0,
		margin: "10px 0",
		overflow: "auto",
	},
	totals: {
		backgroundColor: theme.palette.primary.saffron,
		borderRadius: 5,
		padding: "3px 10px",
		width: "200px",
		height: 30,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	total_field: {
		fontSize: 20,
		fontWeight: 700,
	},
	action__buttons: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.white,
	},
	progress: {
		backgroundColor: theme.palette.primary.saffron,
	},
}));
