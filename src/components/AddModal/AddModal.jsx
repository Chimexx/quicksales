import { Button, Divider, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createDepartment } from "../../redux/departmentsApi";
import { createVendor } from "../../redux/vendorsApi";
import Progress from "../Utils/Progress";
import { Container, Wrapper, ButtonContainer } from "./AddModal.styles";

const AddModal = ({ setModalOpen, type }) => {
	const dispatch = useDispatch();
	const [vendor, setVendor] = useState([]);
	const [customer, setCustomer] = useState([]);
	const [dep, setDep] = useState("");
	const [isValid, setIsValid] = useState(false);

	const { isFetching_vendor } = useSelector((state) => state.vendors);
	const { isFetching_dep } = useSelector((state) => state.departments);

	const handleVendor = (e) => {
		setVendor({ ...vendor, [e.target.name]: e.target.value.toLowerCase() });
		if (vendor.company) setIsValid(true);
	};
	const handleCustomer = (e) => {
		setCustomer({ ...customer, [e.target.name]: e.target.value.toLowerCase() });
		if (customer.firstName) setIsValid(true);
	};
	const createVen = (e) => {
		e.preventDefault();
		createVendor(dispatch, vendor);
	};

	const createDep = (e) => {
		e.preventDefault();
		createDepartment(dispatch, { department: dep });
	};
	// const createCustomer = (e) => {
	// 	e.preventDefault();
	// 	createCustomer(dispatch, { customer: customer });
	// };

	if (type === "dep") {
		return (
			<Container>
				<Wrapper>
					{isFetching_dep && <Progress />}
					<div className="body">
						<p className="title">Add a new department</p>
						<Divider />
						<form className="form" autoComplete="Off">
							<TextField
								label="Department"
								id="department"
								required
								fullWidth={true}
								name="department"
								variant="filled"
								size="small"
								value={dep}
								onChange={(e) => setDep(e.target.value.toLowerCase())}
							/>

							<ButtonContainer>
								<Button
									className=""
									size="small"
									variant="outlined"
									color="primary"
									onClick={createDep}
									disabled={!dep || isFetching_dep}
								>
									Add Department
								</Button>
								<Button
									className=""
									size="small"
									color="secondary"
									onClick={() => setModalOpen(false)}
								>
									Cancel
								</Button>
							</ButtonContainer>
						</form>
					</div>
				</Wrapper>
			</Container>
		);
	}

	if (type === "vendor") {
		return (
			<Container>
				<Wrapper>
					{isFetching_vendor && <Progress />}
					<div className="body">
						<p className="title">Add a new vendor</p>
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
										value={vendor.company ?? ""}
										onChange={handleVendor}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="First Name"
										id="firstName"
										name="firstName"
										variant="filled"
										size="small"
										value={vendor.firstName ?? ""}
										onChange={handleVendor}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="Last Name"
										id="lastName"
										name="lastName"
										variant="filled"
										size="small"
										value={vendor.lastName ?? ""}
										onChange={handleVendor}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="Address"
										id="address"
										name="address"
										variant="filled"
										size="small"
										value={vendor.address ?? ""}
										onChange={handleVendor}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="State"
										id="state"
										name="state"
										variant="filled"
										size="small"
										value={vendor.state ?? ""}
										onChange={handleVendor}
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
										value={vendor.phone ?? ""}
										onChange={handleVendor}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="Bank"
										id="bank"
										name="bank"
										variant="filled"
										size="small"
										value={vendor.bank ?? ""}
										onChange={handleVendor}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="Account Number"
										id="account"
										name="account"
										type="number"
										variant="filled"
										size="small"
										value={vendor.account ?? ""}
										onChange={handleVendor}
									/>
								</Grid>
							</Grid>
							<ButtonContainer>
								<Button
									className=""
									size="small"
									variant="outlined"
									color="primary"
									onClick={createVen}
									disabled={!isValid || isFetching_vendor}
								>
									Add Vendor
								</Button>
								<Button
									className=""
									size="small"
									color="secondary"
									onClick={() => setModalOpen(false)}
								>
									Cancel
								</Button>
							</ButtonContainer>
						</form>
					</div>
				</Wrapper>
			</Container>
		);
	}
	if (type === "customer") {
		return (
			<Container>
				<Wrapper>
					{/* {isFetching_customer && <Progress />} */}
					<div className="body">
						<p className="title">Add a new customer</p>
						<Divider />
						<form className="form" autoComplete="Off">
							<Grid container spacing={3}>
								<Grid item>
									<TextField
										label="Name"
										id="name"
										required
										name="name"
										variant="filled"
										size="small"
										// value={customer.name ?? ""}
										// onChange={handleCustomer}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="First Name"
										id="firstName"
										name="firstName"
										variant="filled"
										size="small"
										// value={customer.firstName ?? ""}
										// onChange={handleCustomer}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="Last Name"
										id="lastName"
										name="lastName"
										variant="filled"
										size="small"
										// value={customer.lastName ?? ""}
										// onChange={handleCustomer}
									/>
								</Grid>
								<Grid item>
									<TextField
										label="Address"
										id="address"
										name="address"
										variant="filled"
										size="small"
										// value={customer.address ?? ""}
										// onChange={handleCustomer}
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
										// value={customer.phone ?? ""}
										// onChange={handleCustomer}
									/>
								</Grid>
							</Grid>
							<ButtonContainer>
								<Button
									className=""
									size="small"
									variant="outlined"
									color="primary"
									// onClick={createCustomer}
									// disabled={!isValid || isFetching_customer}
								>
									Add Customer
								</Button>
								<Button
									className=""
									size="small"
									color="secondary"
									onClick={() => setModalOpen(false)}
								>
									Cancel
								</Button>
							</ButtonContainer>
						</form>
					</div>
				</Wrapper>
			</Container>
		);
	}
};

export default AddModal;
