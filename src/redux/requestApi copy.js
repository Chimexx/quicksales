import { publicRequest } from "../requestMethods";
import {
	fetchItemsFailure,
	fetchItemsStart,
	fetchItemsSuccess,
	fetchDepartmentFailure,
	fetchDepartmentStart,
	fetchDepartmentSuccess,
	fetchVendorFailure,
	fetchVendorStart,
	fetchVendorSuccess,
} from "./productSlice";

export const itemsFetch = async (dispatch) => {
	dispatch(fetchItemsStart());
	try {
		const res = await publicRequest.get("dishes");
		await dispatch(fetchItemsSuccess(res.data));
	} catch (error) {
		dispatch(fetchItemsFailure());
	}
};

export const vendorFetch = async (dispatch) => {
	dispatch(fetchVendorStart());

	try {
		const res = await publicRequest.get("meat");
		await dispatch(fetchVendorSuccess(res.data));
	} catch (error) {
		dispatch(fetchVendorFailure());
	}
};

export const departmentFetch = async (dispatch) => {
	dispatch(fetchDepartmentStart());
	try {
		const res = await publicRequest.get("sauce");
		await dispatch(fetchDepartmentSuccess(res.data));
	} catch (error) {
		dispatch(fetchDepartmentFailure());
		console.log(error);
	}
};
