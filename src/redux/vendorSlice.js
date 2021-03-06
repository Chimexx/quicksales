import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	vendorList: [],
	isFetching_vendor: false,
	error: false,
};

const vendorSlice = createSlice({
	name: "vendors",
	initialState,
	reducers: {
		//Fetch Vendor
		fetchVendorStart: (state) => {
			state.isFetching_vendor = true;
		},
		fetchVendorSuccess: (state, action) => {
			state.isFetching_vendor = false;
			state.error = false;
			state.vendorList = action.payload;
		},
		fetchVendorFailure: (state) => {
			state.isFetching_vendor = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Create Vendor
		createVendorStart: (state) => {
			state.isFetching_vendor = true;
		},
		createVendorSuccess: (state, action) => {
			state.isFetching_vendor = false;
			state.error = false;
			state.vendorList.push(action.payload);
			toast.success(`${action.payload.company} has been added!`);
		},
		createVendorFailure: (state) => {
			state.isFetching_vendor = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Update Vendor
		updateVendorStart: (state) => {
			state.isFetching_vendor = true;
		},
		updateVendorSuccess: (state, action) => {
			state.isFetching_vendor = false;
			state.error = false;
			const { type, data } = action.payload;

			const index = state.vendorList.findIndex((item) => item._id === data._id);
			if (type === "buy") {
				if (data.company) {
					state.vendorList[index] = data;
				}
			} else {
				state.vendorList[index] = data;
				toast.success(`${data.company} has been updated!`);
			}
		},
		updateVendorFailure: (state) => {
			state.isFetching_vendor = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Delete Vendor
		deleteVendorStart: (state) => {
			state.isFetching_vendor = true;
		},
		deleteVendorSuccess: (state, action) => {
			state.isFetching_vendor = false;
			state.vendorList.splice(
				state.vendorList.findIndex((item) => item._id === action.payload.id),
				1
			);
			toast.success(`Vendor has been removed!`);
		},
		deleteVendorFailure: (state) => {
			state.isFetching_vendor = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
	},
});

export default vendorSlice.reducer;
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
} = vendorSlice.actions;
