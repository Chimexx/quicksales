import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	TextField,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Wrapper, ButtonContainer } from "./Customer.styles";
import Progress from "../../components/Utils/Progress";
import { deleteCustomer, updateCustomer } from "../../redux/customerApi";

const Customer = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	let navigate = useNavigate();
	const id = location.pathname.split("/")[2];
	const [open, setOpen] = React.useState(false);

	const { customerList, isFetching_customer } = useSelector((state) => state.customers);
	const customer = customerList.find((customer) => customer._id === id);

	const [firstName, setFirstName] = useState(customer.firstName);
	const [lastName, setLastName] = useState(customer.lastName);
	const [address, setAddress] = useState(customer.address);
	const [state, setState] = useState(customer.state);
	const [phone, setPhone] = useState(customer.phone);
	const [balance, setBalance] = useState(customer.balance);

	const data = {
		_id: id,
		firstName,
		lastName,
		address,
		state,
		phone,
		balance,
	};
	// const checkValid = () => {
	// 	if (firstName) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };
	const handleBack = () => {
		navigate("/customers", { replace: true });
	};

	const handleUpdate = async () => {
		updateCustomer({ customer: data }, dispatch);
	};

	const handleDelete = () => {
		deleteCustomer(id, dispatch);
		navigate("/customers", { replace: true });
	};
	return (
		<Container>
			<Wrapper>
				{isFetching_customer && <Progress />}
				<div className="body">
					<p className="title">Update Customer</p>
					<Divider />
					<form className="form" autoComplete="Off">
						<TextField
							fullWidth={true}
							label="First Name"
							id="firstName"
							name="firstName"
							variant="filled"
							size="small"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>

						<TextField
							fullWidth={true}
							label="Last Name"
							id="lastName"
							name="lastName"
							variant="filled"
							size="small"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>

						<TextField
							label="Address"
							id="address"
							name="address"
							variant="filled"
							size="small"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>

						<TextField
							label="State"
							id="state"
							name="state"
							variant="filled"
							size="small"
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>

						<TextField
							label="Phone"
							id="phone"
							name="phone"
							type="number"
							variant="filled"
							size="small"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>

						<TextField
							label="Balance"
							id="balance"
							name="Balance"
							type="number"
							variant="filled"
							size="small"
							value={balance}
							onChange={(e) => setBalance(parseInt(e.target.value))}
						/>
					</form>
					<ButtonContainer>
						<div>
							<Button
								className="update__button"
								size="small"
								variant="outlined"
								color="primary"
								onClick={handleUpdate}
								disabled={!firstName || isFetching_customer}
							>
								Update Customer
							</Button>
							<Button className="" size="small" color="secondary" onClick={handleBack}>
								Cancel
							</Button>
						</div>
						<Button
							variant="outlined"
							color="primary"
							className="delete_button"
							size="small"
							onClick={() => setOpen(true)}
							disabled={isFetching_customer || !firstName}
						>
							Delete
						</Button>
					</ButtonContainer>
					<Dialog
						open={open}
						onClose={() => setOpen(false)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">{"Delete Customer?"}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								Are you sure you want to delete {customer.firstName}?
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => setOpen(false)} color="primary">
								Cancel
							</Button>
							<Button onClick={handleDelete} className="delete_button" autoFocus>
								Delete
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</Wrapper>
		</Container>
	);
};

export default Customer;
