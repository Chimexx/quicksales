import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	customerList: [],
	isFetching_customer: false,
	error: false,
};

const customerSlice = createSlice({
	name: "customers",
	initialState,
	reducers: {
		//Fetch Customer
		fetchCustomerStart: (state) => {
			state.isFetching_customer = true;
		},
		fetchCustomerSuccess: (state, action) => {
			state.isFetching_customer = false;
			state.error = false;
			state.customerList = action.payload;
		},
		fetchCustomerFailure: (state) => {
			state.isFetching_customer = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Create Customer
		createCustomerStart: (state) => {
			state.isFetching_customer = true;
		},
		createCustomerSuccess: (state, action) => {
			state.isFetching_customer = false;
			state.error = false;
			state.customerList.push(action.payload);
			toast.success(`${action.payload.firstName} has been added!`);
		},
		createCustomerFailure: (state) => {
			state.isFetching_customer = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Update Customer
		updateCustomerStart: (state) => {
			state.isFetching_customer = true;
		},
		updateCustomerSuccess: (state, action) => {
			state.isFetching_customer = false;
			state.error = false;
			const { total, sale, data } = action.payload;
			console.log(total, sale, data);
			const index = state.customerList.findIndex((customer) => customer._id === data._id);
			if (sale) {
				if (data.firstName) {
					state.customerList[index] = { ...data, balance: data.balance + total };
				}
			} else {
				// state.customerList[index] = action.payload.data;
				// toast.success(`${action.payload.firstName} has been updated!`);
			}
		},
		updateCustomerFailure: (state) => {
			state.isFetching_customer = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Delete Customer
		deleteCustomerStart: (state) => {
			state.isFetching_customer = true;
		},
		deleteCustomerSuccess: (state, action) => {
			state.isFetching_customer = false;
			state.customerList.splice(
				state.customerList.findIndex((item) => item._id === action.payload.id),
				1
			);
			toast.success(`Customer has been removed!`);
		},
		deletCustomerFailure: (state) => {
			state.isFetching_customer = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
	},
});

export default customerSlice.reducer;
export const getState = (state) => state.customers;
export const {
	fetchCustomerFailure,
	fetchCustomerStart,
	fetchCustomerSuccess,
	createCustomerFailure,
	createCustomerStart,
	createCustomerSuccess,
	deleteCustomerFailure,
	deleteCustomerStart,
	deleteCustomerSuccess,
	updateCustomerFailure,
	updateCustomerStart,
	updateCustomerSuccess,
} = customerSlice.actions;
