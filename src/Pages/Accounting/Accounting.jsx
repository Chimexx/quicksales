import { Typography } from "@material-ui/core";
import React from "react";
import Progress from "../../components/Utils/Progress";
import { useStyles } from "./Accounting.styles";

const Accounting = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.container}>
				{/* {isFetching && <Progress />} */}
				<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
					Accounting
				</Typography>
			</div>
		</>
	);
};

export default Accounting;
