import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	itemList: [],
	meatList: [],
	sauceList: [],
	pending: false,
	error: false,
};

const productSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		//FetchItems
		fetchItemsStart: (state) => {
			state.pending = true;
		},
		fetchItemsSuccess: (state, action) => {
			state.pending = false;
			state.error = false;
			state.itemList = action.payload;
		},
		fetchItemsFailure: (state) => {
			state.pending = false;
			state.error = true;
		},
		//FetchMeat
		fetchMeatStart: (state) => {
			state.pending = true;
		},
		fetchMeatSuccess: (state, action) => {
			state.pending = false;
			state.error = false;
			state.meatList = action.payload;
		},
		fetchMeatFailure: (state) => {
			state.pending = false;
			state.error = true;
		},
		//FetchSauce
		fetchSauceStart: (state) => {
			state.pending = true;
		},
		fetchSauceSuccess: (state, action) => {
			state.pending = false;
			state.error = false;
			state.sauceList = action.payload;
		},
		fetchSauceFailure: (state) => {
			state.pending = false;
			state.error = true;
		},
	},
});

export default productSlice.reducer;
export const getState = (state) => state.items;
export const {
	fetchSauceStart,
	fetchSauceSuccess,
	fetchSauceFailure,
	fetchItemsStart,
	fetchItemsSuccess,
	fetchItemsFailure,
	fetchMeatStart,
	fetchMeatSuccess,
	fetchMeatFailure,
} = productSlice.actions;
