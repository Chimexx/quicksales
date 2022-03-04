import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	purchaseHistoryList: [],
	isFetching_history: false,
	error: false,
};

const purchaseHistorySlice = createSlice({
	name: "purchaseHistorys",
	initialState,
	reducers: {
		//Fetch PurchaseHistory
		fetchPurchaseHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		fetchPurchaseHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.error = false;
			state.purchaseHistoryList = action.payload;
		},
		fetchPurchaseHistoryFailure: (state) => {
			state.isFetching_history = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Create PurchaseHistory
		createPurchaseHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		createPurchaseHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.error = false;
			state.purchaseHistoryList.unshift(action.payload);
		},
		createPurchaseHistoryFailure: (state) => {
			state.isFetching_history = false;
			state.error = true;
			toast.error(`Sorry, couldn't create history`);
		},
		//Update PurchaseHistory
		updatePurchaseHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		updatePurchaseHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.error = false;

			const index = state.purchaseHistoryList.findIndex((item) => item._id === action.payload._id);

			state.purchaseHistoryList[index] = action.payload;
		},
		updatePurchaseHistoryFailure: (state) => {
			state.isFetching_history = false;
			state.error = true;
			toast.error(`Sorry, couldn't create history`);
		},
		//Delete PurchaseHistory
		deletePurchaseHistoryStart: (state) => {
			state.isFetching_history = true;
		},
		deletePurchaseHistorySuccess: (state, action) => {
			state.isFetching_history = false;
			state.purchaseHistoryList.splice(
				state.purchaseHistoryList.findIndex((item) => item._id === action.payload.id),
				1
			);
			toast.success(`PurchaseHistory has been removed!`);
		},
		deletePurchaseHistoryFailure: (state) => {
			state.isFetching_history = false;
			state.error = true;
			toast.error(`Sorry, couldn't create history`);
		},
	},
});

export default purchaseHistorySlice.reducer;
export const getState = (state) => state.purchaseHistorys;
export const {
	fetchPurchaseHistoryFailure,
	fetchPurchaseHistoryStart,
	fetchPurchaseHistorySuccess,
	createPurchaseHistoryFailure,
	createPurchaseHistoryStart,
	createPurchaseHistorySuccess,
	deletePurchaseHistoryFailure,
	deletePurchaseHistoryStart,
	deletePurchaseHistorySuccess,
	updatePurchaseHistoryFailure,
	updatePurchaseHistoryStart,
	updatePurchaseHistorySuccess,
} = purchaseHistorySlice.actions;
