import React, { useState } from "react";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Wrapper, ButtonContainer } from "./Vendor.styles";
import { updateVendor } from "../../redux/vendorsApi";
import Progress from "../../components/Utils/Progress";

const Vendor = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	let navigate = useNavigate();
	const id = location.pathname.split("/")[2];

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
		await updateVendor({ vendor: data }, dispatch);
	};

	return (
		<Container>
			<Wrapper>
				{isFetching_vendor && <Progress />}
				<div className="body">
					<p className="title">Update Vendor</p>
					<Divider />
					<form className="form" autoComplete="Off">
						<Grid container spacing={3}>
							<Grid item>
								<TextField
									label="Company"
									id="company"
									required
									name="company"
									variant="filled"
									size="small"
									value={company}
									onChange={(e) => setCompany(e.target.value)}
								/>
							</Grid>
							<Grid item>
								<TextField
									label="First Name"
									id="firstName"
									name="firstName"
									variant="filled"
									size="small"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</Grid>
							<Grid item>
								<TextField
									label="Last Name"
									id="lastName"
									name="lastName"
									variant="filled"
									size="small"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</Grid>
							<Grid item>
								<TextField
									label="Address"
									id="address"
									name="address"
									variant="filled"
									size="small"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</Grid>
							<Grid item>
								<TextField
									label="State"
									id="state"
									name="state"
									variant="filled"
									size="small"
									value={state}
									onChange={(e) => setState(e.target.value)}
								/>
							</Grid>
							<Grid item>
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
							</Grid>
							<Grid item>
								<TextField
									label="Bank"
									id="bank"
									name="bank"
									variant="filled"
									size="small"
									value={bank}
									onChange={(e) => setBank(e.target.value)}
								/>
							</Grid>
							<Grid item>
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
							</Grid>
						</Grid>
						<ButtonContainer>
							<Button
								className=""
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
						</ButtonContainer>
					</form>
				</div>
			</Wrapper>
		</Container>
	);
};

export default Vendor;
