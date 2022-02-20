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
function DatePicker() {
	const classes = useStyles();

	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				className={classes.new__input}
				disableToolbar
				variant="inline"
				size="small"
				format="dd/MM/yyyy"
				id="date-picker-inline"
				label="Product Expiry Date"
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					"aria-label": "change date",
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}

export default DatePicker;
