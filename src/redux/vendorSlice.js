import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	vendorList: [],
	isFetching: false,
	error: false,
};

const departmentSlice = createSlice({
	name: "vendors",
	initialState,
	reducers: {
		//Fetch Vendor
		fetchVendorStart: (state) => {
			state.isFetching = true;
		},
		fetchVendorSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.vendorList = action.payload;
		},
		fetchVendorFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Create Vendor
		createVendorStart: (state) => {
			state.isFetching = true;
		},
		createVendorSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.vendorList = action.payload;
			toast.success(`${action.payload.company} has been added!`);
		},
		createDepartmentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Update Vendor
		updateProductStart: (state) => {
			state.isFetching = true;
		},
		updateVendorSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.vendorList[state.vendorList.findIndex((item) => item._id === action.payload.id)] =
				action.payload.data;
			toast.success(`${action.payload.company} has been updated!`);
		},
		updateVendorFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Delete Vendor
		deleteVendorStart: (state) => {
			state.isFetching = true;
		},
		deleteVendorSuccess: (state, action) => {
			state.isFetching = false;
			state.vendorList.splice(
				state.vendorList.findIndex((item) => item._id === action.payload.id),
				1
			);
			toast.success(`Vendor has been removed!`);
		},
		deleteVendorFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
	},
});

export default departmentSlice.reducer;
export const getState = (state) => state.vendors;
export const {
	fetchVendorFailure,
	fetchVendorStart,
	fetchVendorSuccess,
	createVendorFailure,
	createVendorStart,
	createVendorSuccess,
	deleteVendorFailure,
	deleteVendorStart,
	deleteVendorSuccess,
	updateVendorFailure,
	updateVendorStart,
	updateVendorSuccess,
} = departmentSlice.actions;
