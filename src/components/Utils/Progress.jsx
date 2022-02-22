import React from "react";
import { LinearProgress, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	progress: {
		backgroundColor: theme.palette.primary.saffron,
	},
}));

const Progress = () => {
	const classes = useStyles();
	return <LinearProgress className={classes.progress} />;
};

export default Progress;
