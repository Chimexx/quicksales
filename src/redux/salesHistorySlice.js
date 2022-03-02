import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	saleshistoryList: [],
	isFetching_history: false,
	error: false,
};

const saleshistorySlice = createSlice({
	name: "saleshistorys",
	initialState,
	reducers: {
		//Fetch SalesHistory
		fetchSalesHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		fetchSalesHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.error = false;
			state.saleshistoryList = action.payload;
		},
		fetchSalesHistoryFailure: (state) => {
			state.isFetching_history = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Create SalesHistory
		createSalesHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		createSalesHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.error = false;
			state.saleshistoryList.push(action.payload);
		},
		createSalesHistoryFailure: (state) => {
			state.isFetching_history = false;
			state.error = true;
			toast.error(`Sorry, couldn't create history`);
		},
		//Update SalesHistory
		updateSalesHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		updateSalesHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.error = false;

			const index = state.saleshistoryList.findIndex((item) => item._id === action.payload._id);

			state.saleshistoryList[index] = action.payload;
		},
		updateSalesHistoryFailure: (state) => {
			state.isFetching_history = false;
			state.error = true;
			toast.error(`Sorry, couldn't create history`);
		},
		//Delete SalesHistory
		deleteSalesHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		deleteSalesHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.saleshistoryList.splice(
				state.saleshistoryList.findIndex((item) => item._id === action.payload.id),
				1
			);
			toast.success(`SalesHistory has been removed!`);
		},
		deleteSalesHistoryFailure: (state) => {
			state.isFetching_history = false;
			state.error = true;
			toast.error(`Sorry, couldn't create history`);
		},
	},
});

export default saleshistorySlice.reducer;
export const getState = (state) => state.saleshistorys;
export const {
	fetchSalesHistoryFailure,
	fetchSalesHistoryStart,
	fetchSalesHistorySuccess,
	createSalesHistoryFailure,
	createSalesHistoryStart,
	createSalesHistorySuccess,
	deleteSalesHistoryFailure,
	deleteSalesHistoryStart,
	deleteSalesHistorySuccess,
	updateSalesHistoryFailure,
	updateSalesHistoryStart,
	updateSalesHistorySuccess,
} = saleshistorySlice.actions;
