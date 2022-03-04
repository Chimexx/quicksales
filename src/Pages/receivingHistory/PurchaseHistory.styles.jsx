import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 0,
		height: "100%",
		border: `1px solid ${theme.palette.secondary.main}`,
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

	tableContainer: {
		height: "100%",
		width: "60%",
		borderRadius: "5px 5px 0 0",
		boxShadow: "none",
		marginRight: 10,
	},
	tableCell: {
		overflow: "hidden",
		whiteSpace: "nowrap",
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
		cursor: "pointer",

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
	wrapper: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		marginTop: 5,
		height: "100%",
		overflow: "auto",
	},
	containerRight: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "40%",
		padding: 0,
		overflow: "auto",
		height: "100%",
		borderRadius: "5px 5px 0 0",
		border: `1px solid ${theme.palette.secondary.main}`,
	},
	new_head: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		fontSize: 18,
		height: 35,
		padding: "0 10px",
		color: theme.palette.primary.white,
		backgroundColor: "#71c1f8",
		marginBottom: 0,
	},
	new: {
		width: "100%",
		color: theme.palette.primary.darkGray,
		padding: 0,
		margin: 0,
	},
	inner__body: {
		padding: 10,
	},
	item: {
		marginBottom: 10,
		backgroundColor: theme.palette.primary.lightBlue,
		color: theme.palette.primary.white,

		"&:last-child": {
			marginBottom: 0,
		},
	},
	row: {
		padding: "5px 10px",
		textTransform: "capitalize",
	},
	span: {
		marginRight: 10,
		fontWeight: 700,
	},
}));
