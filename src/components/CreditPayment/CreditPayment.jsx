import { Button, Divider, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { convertMoney } from "../Utils/converter";
import { useStyles } from "./CreditPayment.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers, updateCustomer } from "../../redux/customerApi";
import { CgCloseO } from "react-icons/cg";

const CreditPayment = ({ credit, setProceed, customer }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [amount, setAmount] = useState("");

	const handlePayment = () => {
		const payment = {
			paid: amount,
			date: new Date(),
			creditId: credit._id,
		};
		const status = credit.totalCredited === credit.totalPaid + amount ? "Closed" : "Open";

		updateCustomer({ customer, entity: payment, status, type: "pay" }, dispatch);
		fetchCustomers(dispatch);
		setProceed(false);
		setAmount("");
	};
	return (
		<div className={classes.container}>
			<CgCloseO className={classes.close} onClick={() => setProceed(false)} />
			<p className={classes.credit_title}>Receive Payment</p>
			<Divider />
			<div className={classes.credit_details}>
				<p className={classes.credit_caption}>Balance for this credit:</p>
				<p className={classes.credit_amount}>
					{credit?.totalCredited ? convertMoney(credit?.totalCredited - credit?.totalPaid) : "- -"}
				</p>
			</div>
			<Divider />
			<div className={classes.credit_input}>
				<TextField
					id="outlined-basic"
					autoComplete="off"
					label="Amount received"
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
					disabled={!amount || amount > credit?.totalCredited - credit?.totalPaid}
					onClick={handlePayment}
				>
					Receive
				</Button>
			</div>
		</div>
	);
};

export default CreditPayment;
