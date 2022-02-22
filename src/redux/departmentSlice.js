import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	departmentList: [],
	isFetching: false,
	error: false,
};
const departmentSlice = createSlice({
	name: "departments",
	initialState,
	reducers: {
		//Fetch Department
		fetchDepartmentStart: (state) => {
			state.isFetching = true;
		},
		fetchDepartmentSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.departmentList = action.payload;
		},
		fetchDepartmentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Create Department
		createDepartmentStart: (state) => {
			state.isFetching = true;
		},
		createDepartmentSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.departmentList = action.payload;
			toast.success(`${action.payload.dep} has been added!`);
		},
		createDepartmentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Update Department
		updateDepartmentStart: (state) => {
			state.isFetching = true;
		},
		updateDepartmentSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.departmentList[state.departmentList.findIndex((item) => item._id === action.payload.id)] =
				action.payload.data;
			toast.success(`${action.payload.dep} has been updated!`);
		},
		updateDepartmentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Delete Department
		deleteDepartmentStart: (state) => {
			state.isFetching = true;
		},
		deleteDepartmentSuccess: (state, action) => {
			state.isFetching = false;
			state.departmentList.splice(
				state.departmentList.findIndex((item) => item._id === action.payload.id),
				1
			);
			toast.success(`Department has been removed!`);
		},
		deleteDepartmentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
	},
});

export default departmentSlice.reducer;
export const getState = (state) => state.departments;
export const {
	fetchDepartmentFailure,
	fetchDepartmentStart,
	fetchDepartmentSuccess,
	createDepartmentFailure,
	createDepartmentStart,
	createDepartmentSuccess,
	deleteDepartmentFailure,
	deleteDepartmentStart,
	deleteDepartmentSuccess,
	updateDepartmentFailure,
	updateDepartmentStart,
	updateDepartmentSuccess,
} = departmentSlice.actions;
