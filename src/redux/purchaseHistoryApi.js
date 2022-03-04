import {
	fetchPurchaseHistoryStart,
	fetchPurchaseHistorySuccess,
	fetchPurchaseHistoryFailure,
	createPurchaseHistoryStart,
	createPurchaseHistorySuccess,
	createPurchaseHistoryFailure,
	updatePurchaseHistoryStart,
	updatePurchaseHistorySuccess,
	updatePurchaseHistoryFailure,
	deletePurchaseHistoryStart,
	deletePurchaseHistorySuccess,
	deletePurchaseHistoryFailure,
} from "./purchaseHistorySlice";
import { authRequest, publicRequest } from "./requestMethods";

//Fetch PurchaseHistorys
export const fetchPurchaseHistorys = async (dispatch) => {
	dispatch(fetchPurchaseHistoryStart());
	try {
		const res = await publicRequest.get("purchase-historys");
		await dispatch(fetchPurchaseHistorySuccess(res.data));
	} catch (error) {
		dispatch(fetchPurchaseHistoryFailure());
	}
};

//Create PurchaseHistorys
export const createPurchaseHistory = async (data, dispatch) => {
	dispatch(createPurchaseHistoryStart());
	try {
		const res = await publicRequest.post("purchase-historys/new", data);
		await dispatch(createPurchaseHistorySuccess(res.data));
	} catch (error) {
		dispatch(createPurchaseHistoryFailure());
	}
};

//Update PurchaseHistorys
export const updatePurchaseHistory = async (data, dispatch) => {
	dispatch(updatePurchaseHistoryStart());
	try {
		const res = await authRequest.put(`purchase-historys/${data.purchaseHistory._id}`, data);
		await dispatch(updatePurchaseHistorySuccess({ data: res.data }));
	} catch (error) {
		dispatch(updatePurchaseHistoryFailure());
	}
};

//Delete PurchaseHistorys
export const deletePurchaseHistory = async (id, dispatch) => {
	dispatch(deletePurchaseHistoryStart());
	try {
		await authRequest.delete(`purchase-historys/${id}`);
		await dispatch(deletePurchaseHistorySuccess({ id }));
	} catch (error) {
		dispatch(deletePurchaseHistoryFailure());
	}
};
