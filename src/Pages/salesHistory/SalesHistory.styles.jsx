import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 0,
		height: "100%",
		border: `1px solid ${theme.palette.secondary.main}`,
		fontFamily: "poppins",
	},
	header: {
		fontSize: 18,
		padding: "0 10px",
		color: theme.palette.primary.white,
		backgroundColor: theme.palette.primary.lightBlue,
		marginBottom: 0,
	},

	bar: {
		display: "flex",
		padding: "0px 10px",
		borderRadius: 0,
		alignItems: "center",
		height: 40,
	},
	search: {
		height: 30,
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
	table: {},
	tableContainer: {
		height: "100%",
		borderRadius: 0,
		marginTop: 3,
		boxShadow: "none",
	},
	tableCell: {
		overflow: "hidden",
		whiteSpace: "nowrap",
		fontFamily: "poppins",
		// backgroundColor: #018ff4,
	},
	tableHead: {
		fontWeight: 600,
		fontSize: 16,
		overflow: "hidden",
		whiteSpace: "nowrap",
		fontFamily: "poppins",
		color: "#fff",
		backgroundColor: theme.palette.primary.lightBlue,
	},
	tableBody: {
		overflow: "hidden",
		whiteSpace: "nowrap",
		fontFamily: "poppins",
		transition: "ease-in-out all 0.6s",
		textTransform: "capitalize",

		"&:hover": {
			backgroundColor: theme.palette.primary.lightBlue,
		},
	},
	itemName: {
		minWidth: 200,
		fontFamily: "poppins",
	},

	buttonContainer: {
		display: "flex",
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		paddingRight: "20px",
		borderRight: `1px solid ${theme.palette.secondary.main}`,
	},
	button: {
		border: "none",
		padding: "0 10px",
		borderRadius: 8,
		margin: 0,
		display: "flex",
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		transition: "ease-in-out all 0.3s",
		cursor: "pointer",
		fontWeight: 700,
		color: theme.palette.primary.darkGray,
		backgroundColor: theme.palette.primary.bg3,

		"&:hover": {
			backgroundColor: theme.palette.primary.blueDeFrance2,
		},
	},
	inputContainer: {
		display: "flex",
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		padding: "0 20px",
		borderRight: `1px solid ${theme.palette.secondary.main}`,
		position: "relative",

		"&:last-child": {
			borderRight: "none",
		},
	},

	input: {
		height: 30,
		paddingLeft: 30,
		paddingRight: 10,
		borderRadius: 8,
		outline: "none",
		border: "none",
		fontSize: 16,
		width: 110,
		backgroundColor: theme.palette.primary.bg3,
	},

	date_input: {
		height: 30,
		paddingLeft: 5,
		paddingRight: 5,
		borderRadius: 8,
		outline: "none",
		border: "none",
		fontSize: 16,
		width: 120,
		backgroundColor: theme.palette.primary.bg3,
	},
	searchIcon: {
		position: "absolute",
		left: 25,
		fontSize: 20,
		color: theme.palette.primary.blueDeFrance2,
	},
	buttonIcon: {
		color: theme.palette.primary.blueDeFrance2,
		fontSize: 25,
		paddingRight: 4,
	},
	select: {
		height: 30,
		borderRadius: 8,
		outline: "none",
		border: "none",
		fontSize: 16,
		cursor: "pointer",
		textTransform: "capitalize",
		padding: "0 5px",
		margin: 0,
		backgroundColor: theme.palette.primary.bg3,
	},
}));
