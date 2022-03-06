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
	body: {
		display: "flex",
		justifyContent: "space-between",

		height: "100%",
		width: "100%",
	},
	list: {
		width: "25%",
		height: "calc(100% - 3px)",
		marginTop: "3px",
		borderRight: `1px solid #dadae0`,
	},
	main: {
		width: "75%",
		height: "calc(100% - 3px)",
		marginTop: 3,
		marginLeft: 3,
	},
	search: {
		margin: "10px 0 10px 10px ",
	},

	vendorlist: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		overflow: "auto",
	},
	eachVendor: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		height: "2rem",
		borderBottom: `1px solid #dadae0`,
		transition: "all ease-in-out 0.3s",
		cursor: "pointer",

		"&:hover": {
			backgroundColor: theme.palette.primary.lightBlue,
		},
	},
	company: {
		width: "50%",
		padding: "0 3px 0 3px",
		textTransform: "capitalize",
	},
	amount: {
		width: "50%",
		padding: "0 3px 0 3px",
		textAlign: "right",
	},
	vendor__info: {
		// display: "grid",
		// gridTemplateColumns: "repeat(auto-fill,300px) ",
		// padding: 10,
		// width: "100%",
		// textTransform: "capitalize",
		// border: `1px solid #dadae0`,
	},
	table: {
		borderCollapse: "collapse",
		minWidth: "100%",
	},

	table__head: {
		fontWeight: "800!important",
	},
	check: {
		height: 30,
		width: 30,
	},
}));
