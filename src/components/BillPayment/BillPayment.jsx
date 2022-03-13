import { Button, Divider, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { convertMoney } from "../Utils/converter";
import { useStyles } from "./BillPayment.styles";
import Progress from "../../components/Utils/Progress";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendors, updateVendor } from "../../redux/vendorsApi";
import { CgCloseO } from "react-icons/cg";

const BillPayment = ({ bill, setProceed, vendor }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [amount, setAmount] = useState("");

	const handlePayment = () => {
		const payment = {
			paid: amount,
			date: new Date(),
			billId: bill._id,
		};
		const status = bill.totalBilled === bill.totalPaid + amount ? "Closed" : "Open";

		updateVendor({ vendor, entity: payment, status, type: "pay" }, dispatch);
		fetchVendors(dispatch);
		setProceed(false);
		setAmount("");
	};
	return (
		<div className={classes.container}>
			{/* {isFetching_vendor && <Progress />} */}
			<CgCloseO className={classes.close} onClick={() => setProceed(false)} />
			<p className={classes.bill_title}>Pay this bill</p>
			<Divider />
			<div className={classes.bill_details}>
				<p className={classes.bill_caption}>Balance for this bill:</p>
				<p className={classes.bill_amount}>
					{bill?.totalBilled ? convertMoney(bill?.totalBilled - bill?.totalPaid) : "- -"}
				</p>
			</div>
			<Divider />
			<div className={classes.bill_input}>
				<TextField
					id="outlined-basic"
					autoComplete="off"
					label="Amount to pay"
					size="small"
					className={classes.input}
					variant="outlined"
					value={amount}
					type="number"
					onChange={(e) => setAmount(parseInt(e.target.value))}
				/>
				<Button
					className={classes.pay_button}
					variant="contained"
					color="primary"
					disabled={!amount || amount > bill?.totalBilled - bill?.totalPaid}
					onClick={handlePayment}
				>
					Pay
				</Button>
			</div>
		</div>
	);
};

export default BillPayment;
