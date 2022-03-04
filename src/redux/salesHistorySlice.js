import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	salesHistoryList: [],
	isFetching_history: false,
	error: false,
};

const saleshistorySlice = createSlice({
	name: "salesHistorys",
	initialState,
	reducers: {
		//Fetch SalesHistory
		fetchSalesHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		fetchSalesHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.error = false;
			state.salesHistoryList = action.payload;
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
			console.log(action.payload);
			state.isFetching_history = false;
			state.error = false;
			state.salesHistoryList.unshift(action.payload);
			// if(customPrice !== null ){

			// }
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

			const index = state.salesHistoryList.findIndex((item) => item._id === action.payload._id);

			state.salesHistoryList[index] = action.payload;
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
			state.salesHistoryList.splice(
				state.salesHistoryList.findIndex((item) => item._id === action.payload.id),
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
export const getState = (state) => state.salesHistorys;
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
