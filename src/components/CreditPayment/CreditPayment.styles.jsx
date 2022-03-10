import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		padding: 5,
		color: theme.palette.secondary.darkGray,
	},
	credit_title: {
		textTransform: "capitalize",
		fontSize: "1.4rem",
		marginBottom: "0.5rem",
	},
	credit_details: {
		display: "flex",
		margin: "0.5rem 0 0.5rem 0",
	},
	credit_caption: {
		textTransform: "capitalize",
		fontSize: "1rem",
		marginRight: "3rem",
	},
	credit_amount: {
		fontSize: "1rem",
	},
	credit_input: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: "2rem",
		padding: "0 2rem 0 2rem",
	},
	input: {
		marginRight: "2rem",
	},
	pay_button: {
		padding: " 0.4rem 1rem",
	},
	close: {
		fontSize: "33px",
		color: theme.palette.primary.white,
		padding: 5,
		cursor: "pointer",
		marginBottom: "2rem",
	},
}));
