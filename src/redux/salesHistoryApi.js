import {
	fetchSalesHistoryStart,
	fetchSalesHistorySuccess,
	fetchSalesHistoryFailure,
	createSalesHistoryStart,
	createSalesHistorySuccess,
	createSalesHistoryFailure,
	updateSalesHistoryStart,
	updateSalesHistorySuccess,
	updateSalesHistoryFailure,
	deleteSalesHistoryStart,
	deleteSalesHistorySuccess,
	deleteSalesHistoryFailure,
} from "./salesHistorySlice";
import { authRequest, publicRequest } from "./requestMethods";

//Fetch SalesHistorys
export const fetchSalesHistorys = async (dispatch) => {
	dispatch(fetchSalesHistoryStart());
	try {
		const res = await publicRequest.get("sales-historys");
		await dispatch(fetchSalesHistorySuccess(res.data));
	} catch (error) {
		dispatch(fetchSalesHistoryFailure());
	}
};

//Create SalesHistorys
export const createSalesHistory = async (data, dispatch) => {
	dispatch(createSalesHistoryStart());
	try {
		const res = await publicRequest.post("sales-historys/new", data);
		await dispatch(createSalesHistorySuccess(res.data));
	} catch (error) {
		dispatch(createSalesHistoryFailure());
	}
};

//Update SalesHistorys
export const updateSalesHistory = async (data, dispatch) => {
	dispatch(updateSalesHistoryStart());
	try {
		const res = await authRequest.put(`sales-historys/${data.salesHistory._id}`, data);
		await dispatch(updateSalesHistorySuccess({ data: res.data }));
	} catch (error) {
		dispatch(updateSalesHistoryFailure());
	}
};

//Delete SalesHistorys
export const deleteSalesHistory = async (id, dispatch) => {
	dispatch(deleteSalesHistoryStart());
	try {
		await authRequest.delete(`sales-historys/${id}`);
		await dispatch(deleteSalesHistorySuccess({ id }));
	} catch (error) {
		dispatch(deleteSalesHistoryFailure());
	}
};
