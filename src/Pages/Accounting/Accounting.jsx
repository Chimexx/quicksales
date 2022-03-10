import React from "react";
import { useStyles } from "./Accounting.styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import VendorAccounting from "../../components/VendorAccounting/VendorAccounting";
import CustomerAccounting from "../../components/CustomerAccounting/CustomerAccounting";

const Accounting = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.container}>
			<TabContext value={value}>
				<AppBar position="static">
					<TabList onChange={handleChange} aria-label="simple tabs example">
						<Tab label="Vendor Accounting" value="1" />
						<Tab label="Customer Accounting" value="2" />
					</TabList>
				</AppBar>
				<TabPanel value="1" className={classes.panel}>
					<VendorAccounting />
				</TabPanel>
				<TabPanel value="2" className={classes.panel}>
					<CustomerAccounting />
				</TabPanel>
			</TabContext>
		</div>
	);
};

export default Accounting;
