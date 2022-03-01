import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	productList: [],
	isFetching: false,
	error: false,
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		//Fetch Products
		fetchProductStart: (state) => {
			state.isFetching = true;
		},
		fetchProductSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.productList = action.payload;
		},
		fetchProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured, Check your network`);
		},
		//Update Product
		updateProductStart: (state) => {
			state.isFetching = true;
		},
		updateProductSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.productList[state.productList.findIndex((item) => item._id === action.payload.id)] =
				action.payload.data;
			toast.success(`${action.payload.itemName} has been updated!`);
		},
		//receive Inventory
		receiveInventoryStart: (state) => {
			state.isFetching = true;
		},
		receiveInventorySuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			action.payload.forEach((entry) => {
				state.productList[state.productList.findIndex((item) => item._id === entry._id)].availQty +=
					entry.onHandQty;
			});
			toast.success("Inventory has been updated!");
		},
		receiveInventoryFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//sell Inventory
		sellInventoryStart: (state) => {
			state.isFetching = true;
		},
		sellInventorySuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			action.payload.items.forEach((entry) => {
				state.productList[state.productList.findIndex((item) => item._id === entry._id)].availQty -=
					entry.onHandQty;
			});
			toast.success("You just made a sale!");
		},
		sellInventoryFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
		//Create Product
		createProductStart: (state) => {
			state.isFetching = true;
		},
		createProductSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.productList.push(action.payload);
			toast.success(`${action.payload.itemName} has been added!`);
		},
		createProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},

		//Delete Product
		deleteProductStart: (state) => {
			state.isFetching = true;
		},
		deleteProductSuccess: (state, action) => {
			state.isFetching = false;
			state.productList.splice(
				state.productList.findIndex((item) => item._id === action.payload.id),
				1
			);
			toast.success(`Product has been deleted!`);
		},
		deleteProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
			toast.error(`Sorry, an error occured`);
		},
	},
});
export const getProducts = (state) => state.products;
export const {
	fetchProductStart,
	fetchProductSuccess,
	fetchProductFailure,
	createProductStart,
	createProductSuccess,
	createProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
	updateProductStart,
	updateProductSuccess,
	updateProductFailure,
	receiveInventoryStart,
	receiveInventorySuccess,
	receiveInventoryFailure,
	sellInventoryStart,
	sellInventorySuccess,
	sellInventoryFailure,
} = productSlice.actions;
export default productSlice.reducer;
