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
import { Container, Wrapper, ButtonContainer } from "./Department.styles";
import Progress from "../../components/Utils/Progress";
import { deleteDepartment, updateDepartment } from "../../redux/departmentsApi";

const Department = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	let navigate = useNavigate();
	const id = location.pathname.split("/")[2];
	const [open, setOpen] = useState(false);

	const { departmentList, isFetching_dep } = useSelector((state) => state.departments);
	const department = departmentList.find((dep) => dep._id === id);

	const [dep, setDep] = useState(department.department);

	const data = {
		_id: id,
		department,
	};

	const handleBack = () => {
		navigate("/departments", { replace: true });
	};

	const handleUpdate = async () => {
		updateDepartment({ department: data }, dispatch);
	};

	const handleDelete = () => {
		deleteDepartment(id, dispatch);
		navigate("/departments", { replace: true });
	};

	return (
		<Container>
			<Wrapper>
				{isFetching_dep && <Progress />}
				<div className="body">
					<p className="title">Update Department</p>
					<Divider />
					<form className="form" autoComplete="Off">
						<TextField
							className="text"
							label="Department"
							id="department"
							required
							name="department"
							variant="filled"
							size="small"
							value={dep}
							onChange={(e) => setDep(e.target.value)}
						/>
						<ButtonContainer>
							<div>
								<Button
									className=""
									size="small"
									variant="outlined"
									color="primary"
									onClick={handleUpdate}
									disabled={!dep || isFetching_dep}
								>
									Update Department
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
								disabled={isFetching_dep || !dep}
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
							<DialogTitle id="alert-dialog-title">{"Delete Department?"}</DialogTitle>
							<DialogContent>
								<DialogContentText id="alert-dialog-description">
									Are you sure you want to delete {department.department}?
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
					</form>
				</div>
			</Wrapper>
		</Container>
	);
};

export default Department;
