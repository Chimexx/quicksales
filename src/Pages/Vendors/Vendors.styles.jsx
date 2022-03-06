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

	progress: {
		backgroundColor: theme.palette.primary.saffron,
	},

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
	table__row: {
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
}));
