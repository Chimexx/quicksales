import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 0,
		height: "100%",
		border: `1px solid ${theme.palette.secondary.main}`,
		overflow: "hidden",
	},
	panel: {
		padding: "0px!important",
	},
}));
