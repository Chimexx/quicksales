import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
