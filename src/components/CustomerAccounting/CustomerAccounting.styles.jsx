import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 0,
		height: "100%",
		overflow: "hidden",
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
		borderRight: `1px solid #dadae0`,
		height: "calc(100vh - 88px)",
		overflow: "auto",
	},
	main: {
		width: "75%",
		height: "calc(100vh - 88px)",
		marginLeft: 3,
		overflow: "auto",
	},
	search: {
		margin: "10px 0 10px 10px ",
	},
	customerlist: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		overflow: "auto",
	},
	eachCustomer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		height: "2rem",
		borderBottom: `1px solid #dadae0`,
		borderLeft: `3px solid transparent`,
		transition: "all ease-in-out 0.3s",
		cursor: "pointer",
		padding: 5,
		"&:hover": {
			borderLeft: `3px solid ${theme.palette.primary.orange}`,
		},
	},
	customer: {
		width: "50%",
		padding: "0 3px 0 3px",
		textTransform: "capitalize",
	},
	amount: {
		width: "50%",
		padding: "0 3px 0 3px",
		textAlign: "right",
	},
	customer__info: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "5px 0 5px 0",
		padding: "5px 10px 5px 10px",
		width: "100%",
		height: 40,
	},
	customer__title: {
		width: "80%",
		textTransform: "capitalize",
	},

	table_title: {
		fontSize: "1rem",
		textJustify: "center",
	},
	cell: {
		fontSize: "1rem",
	},
	table: {
		width: "100%",
		overflow: "auto",
	},
	table_head_container: {
		display: "grid",
		gridTemplateColumns: "repeat(5, 150px)",
		alignItems: "center",
		padding: "10px 5px 10px  5px",
		borderBottom: `1px solid #dadae0`,
		background: theme.palette.primary.lightBlue,
		color: theme.palette.primary.white,
		fontWeight: 700,
		textAlign: "left",
	},
	table_body_container: {
		alignItems: "center",
		fontWeight: 500,
		justifyContent: "space-between",
	},
	active: {
		background: theme.palette.primary.orange,
		color: theme.palette.primary.white,
	},
	active_customer: {
		borderLeft: `3px solid ${theme.palette.primary.orange}`,
	},
	active_cell: {
		color: "#fff",
	},
	row: {
		display: "grid",
		gridTemplateColumns: "repeat(5, 150px)",
		alignItems: "center",
		padding: "10px 5px 10px  5px",
		borderBottom: `1px solid #dadae0`,
		cursor: "pointer",
		textAlign: "left",
	},
	credit_container: {
		height: "100vh",
		width: 400,
		top: 40,
		right: -400,
		position: "fixed",
		zIndex: 5000,
		display: "flex",
		flexDirection: "column",
		backdropFilter: "blur(9.5px)",
		transition: "all ease-in-out 0.2s",
		borderLeft: `3px solid ${theme.palette.primary.lightBlue}`,
		boxShadow: "rgb(160, 160, 160) 0px 2px 8px 0px",
	},
	credit_container_active: {
		right: 0,
	},

	payments_container: {
		transition: "all ease-in-out 0.4s",
	},
	payments: {
		opacity: 0,
		display: "none",
		transition: "all ease-in-out 0.4s",
		background: theme.palette.primary.lightOrange,
		padding: 10,
		paddingLeft: 40,
		paddingRight: 10,
	},
	show_payments: {
		opacity: 1,
		display: "flex",
		transition: "all ease-in-out 0.4s",
		justifyContent: "flex-start",
	},
	payment_cell: {
		marginRight: "3rem",
	},
}));
