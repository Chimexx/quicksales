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
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
} from "./productSlice";
import { authRequest, publicRequest } from "./requestMethods";

//Fetch Products
export const fetchProducts = async (dispatch) => {
	dispatch(fetchProductStart());
	try {
		const res = await publicRequest.get("dishes");
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
	}
};

//Update Products
export const updateProduct = async (id, data, dispatch) => {
	dispatch(updateProductStart());
	try {
		const res = await authRequest.put(`dishes/${id}`, data);
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
