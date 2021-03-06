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
import { Container, Wrapper, ButtonContainer } from "./Vendor.styles";
import { deleteVendor, updateVendor } from "../../redux/vendorsApi";
import Progress from "../../components/Utils/Progress";

const Vendor = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	let navigate = useNavigate();
	const id = location.pathname.split("/")[2];
	const [open, setOpen] = React.useState(false);

	const { vendorList, isFetching_vendor } = useSelector((state) => state.vendors);
	const vendor = vendorList.find((vendor) => vendor._id === id);

	const [company, setCompany] = useState(vendor.company);
	const [firstName, setFirstName] = useState(vendor.firstName);
	const [lastName, setLastName] = useState(vendor.lastName);
	const [address, setAddress] = useState(vendor.address);
	const [state, setState] = useState(vendor.state);
	const [phone, setPhone] = useState(vendor.phone);
	const [bank, setBank] = useState(vendor.bank);
	const [accountNo, setAccountNo] = useState(vendor.accountNo);

	const data = {
		_id: id,
		company,
		firstName,
		lastName,
		address,
		state,
		phone,
		bank,
		accountNo,
	};
	const checkValid = () => {
		if (company) {
			return true;
		} else {
			return false;
		}
	};
	const handleBack = () => {
		navigate("/vendors", { replace: true });
	};

	const handleUpdate = async () => {
		updateVendor({ vendor: data }, dispatch);
	};

	const handleDelete = () => {
		deleteVendor(id, dispatch);
		navigate("/vendors", { replace: true });
	};
	return (
		<Container>
			<Wrapper>
				{isFetching_vendor && <Progress />}
				<div className="body">
					<p className="title">Update Vendor</p>
					<Divider />
					<form className="form" autoComplete="Off">
						<TextField
							label="Company"
							id="company"
							required
							fullWidth={true}
							name="company"
							variant="filled"
							size="small"
							value={company}
							onChange={(e) => setCompany(e.target.value)}
						/>

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
							label="Bank"
							id="bank"
							name="bank"
							variant="filled"
							size="small"
							value={bank}
							onChange={(e) => setBank(e.target.value)}
						/>

						<TextField
							label="Account Number"
							id="account"
							name="accountNo"
							type="number"
							variant="filled"
							size="small"
							value={accountNo}
							onChange={(e) => setAccountNo(e.target.value)}
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
								disabled={!checkValid() || isFetching_vendor}
							>
								Update Vendor
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
							disabled={isFetching_vendor || !checkValid}
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
						<DialogTitle id="alert-dialog-title">{"Delete Vendor?"}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								Are you sure you want to delete {vendor.company}?
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

export default Vendor;
