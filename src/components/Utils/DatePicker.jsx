import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	new__input: {
		width: "100%",
		margin: "3px 0",
	},
}));
function DatePicker({ expiryDate, setExpiryDate }) {
	const classes = useStyles();

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				className={classes.new__input}
				variant="inline"
				size="small"
				format="dd/MM/yyyy"
				id="date-picker-inline"
				label="Expiry Date"
				value={expiryDate}
				onChange={setExpiryDate}
				KeyboardButtonProps={{
					"aria-label": "change date",
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}

export default DatePicker;
