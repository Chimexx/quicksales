import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	new_head: {
		fontSize: 18,
		padding: "0 10px",
		color: theme.palette.primary.white,
		backgroundColor: theme.palette.primary.lightBlue,
		marginBottom: 0,
	},

	wrapper: {
		padding: "10px 10px 0 10px",
		display: "flex",
		height: "100%",
		width: "100%",
	},

	containerLeft: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "100%",
		padding: 0,
		marginRight: 10,
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
		maxHeight: 280,
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

		"&:disabled": {
			backgroundColor: theme.palette.secondary.main,
		},
	},
	progress: {
		backgroundColor: theme.palette.primary.saffron,
	},

	total_container: {
		display: "flex",
		height: 40,
		width: 300,
		fontFamily: "poppins",
	},

	short: {
		width: "40%",
		borderRadius: "8px 0 0 8px",
		background: theme.palette.primary.green,
		height: "100%",
		display: "flex",
		marginRight: 2,
		fontSize: 25,
		fontWeight: 700,
		alignItems: "center",
		justifyContent: "center",
	},

	long: {
		width: "60%",
		borderRadius: "0 8px 8px 0",
		background: theme.palette.primary.lightGreen,
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "18px",
		fontWeight: 700,
		color: theme.palette.primary.green,
		padding: 5,
		textTransform: "uppercase",
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

	add__buttons: {
		backgroundColor: theme.palette.primary.white,
		color: theme.palette.primary.blueDeFrance,
	},
	account: {
		backgroundColor: theme.palette.primary.lightBlue,
		color: theme.palette.primary.blueDeFrance,
		height: 70,
		width: "100%",
		borderRadius: 5,
		marginBottom: 20,
	},
	account_figure: {
		color: theme.palette.primary.white,
		padding: "0 10px",
		fontWeight: 700,
		fontSize: "2rem",
	},
}));
