import { clearBuyCart, getTotals } from "./BuyCartSlice";
import {
	fetchProductStart,
	fetchProductSuccess,
	fetchProductFailure,
	createProductStart,
	createProductSuccess,
	createProductFailure,
	updateProductStart,
	updateProductSuccess,
	updateProductFailure,
	receiveInventoryStart,
	receiveInventorySuccess,
	receiveInventoryFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
} from "./productSlice";
import { authRequest, publicRequest } from "./requestMethods";

//Fetch Products
export const fetchProducts = async (dispatch, term) => {
	dispatch(fetchProductStart());
	console.log(term);
	try {
		let res;
		term
			? (res = await publicRequest.get(`products?filter=${term}`))
			: (res = await publicRequest.get("products"));
		await dispatch(fetchProductSuccess(res.data));
	} catch (error) {
		dispatch(fetchProductFailure());
	}
};

//Create Products
export const createProduct = async (dispatch, data) => {
	dispatch(createProductStart());
	try {
		const res = await publicRequest.post("products/new", data);
		await dispatch(createProductSuccess(res.data));
	} catch (error) {
		dispatch(createProductFailure());
		console.log(error);
	}
};

//Receive Inventory
export const receiveInventory = async (data, dispatch) => {
	dispatch(receiveInventoryStart());
	try {
		const res = await publicRequest.put("products/receive", data);
		if (res.data === "ok") {
			dispatch(receiveInventorySuccess(data));
			dispatch(clearBuyCart());
			dispatch(getTotals());
		} else {
			dispatch(receiveInventoryFailure());
		}
	} catch (error) {
		dispatch(receiveInventoryFailure());
	}
};
//Update Product
export const updateProduct = async (id, data, dispatch) => {
	dispatch(updateProductStart());
	try {
		const res = await publicRequest.put(`products/${id}`, data);
		await dispatch(updateProductSuccess({ id, data: res.data }));
	} catch (error) {
		dispatch(updateProductFailure());
	}
};

//Delete Products
export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart());
	try {
		await authRequest.delete(`dishes/${id}`);
		await dispatch(deleteProductSuccess({ id }));
	} catch (error) {
		dispatch(deleteProductFailure());
	}
};
