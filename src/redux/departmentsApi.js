import {
	fetchDepartmentStart,
	fetchDepartmentSuccess,
	fetchDepartmentFailure,
	createDepartmentStart,
	createDepartmentSuccess,
	createDepartmentFailure,
	updateDepartmentStart,
	updateDepartmentSuccess,
	updateDepartmentFailure,
	deleteDepartmentStart,
	deleteDepartmentSuccess,
	deleteDepartmentFailure,
} from "./departmentSlice";
import { authRequest, publicRequest } from "./requestMethods";

//Fetch Departments
export const fetchDepartments = async (dispatch) => {
	dispatch(fetchDepartmentStart());
	try {
		const res = await publicRequest.get("departments");
		await dispatch(fetchDepartmentSuccess(res.data));
	} catch (error) {
		dispatch(fetchDepartmentFailure());
	}
};

//Create Departments
export const createDepartment = async (dispatch, data) => {
	dispatch(createDepartmentStart());
	try {
		const res = await publicRequest.post("departments/new", data);
		await dispatch(createDepartmentSuccess(res.data));
	} catch (error) {
		dispatch(createDepartmentFailure());
	}
};

//Update Departments
export const updateDepartment = async (id, data, dispatch) => {
	dispatch(updateDepartmentStart());
	try {
		const res = await authRequest.put(`departments/${id}`, data);
		await dispatch(updateDepartmentSuccess({ id, data: res.data }));
	} catch (error) {
		dispatch(updateDepartmentFailure());
	}
};

//Delete Departments
export const deleteDepartment = async (id, dispatch) => {
	dispatch(deleteDepartmentStart());
	try {
		await authRequest.delete(`departments/${id}`);
		await dispatch(deleteDepartmentSuccess({ id }));
	} catch (error) {
		dispatch(deleteDepartmentFailure());
	}
};
