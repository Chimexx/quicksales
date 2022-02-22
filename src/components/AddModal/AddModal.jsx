import { Button, Divider, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Progress from "../Utils/Progress";
import { Container, Wrapper, ButtonContainer } from "./AddModal.styles";

const AddModal = ({ setModalOpen, type }) => {
	const [vendor, setVendor] = useState([]);
	const [dep, setDep] = useState("system");
	const [loading, setLoading] = useState(false);

	const handleVendor = (e) => {
		setVendor({ ...vendor, [e.target.name]: e.target.value });
	};
	const createVendor = (e) => {
		e.preventDefault();
		console.log(vendor);
	};

	const createDep = (e) => {
		e.preventDefault();
		console.log(dep);
	};

	if (type === "dep") {
		return (
			<Container>
				<Wrapper>
					{loading && <Progress />}
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
								onChange={(e) => setDep(e.target.value)}
							/>

							<ButtonContainer>
								<Button
									className=""
									size="small"
									variant="outlined"
									color="primary"
									onClick={createDep}
									// disabled={!isValid}
								>
									Add Department
								</Button>
								<Button
									className=""
									size="small"
									color="secondary"
									onClick={() => setModalOpen(false)}
									// disabled={!isValid}
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
					{loading && <Progress />}
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
									onClick={createVendor}
									// disabled={!isValid}
								>
									Add Vendor
								</Button>
								<Button
									className=""
									size="small"
									color="secondary"
									onClick={() => setModalOpen(false)}
									// disabled={!isValid}
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
