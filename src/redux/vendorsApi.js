import {
	fetchVendorStart,
	fetchVendorSuccess,
	fetchVendorFailure,
	createVendorStart,
	createVendorSuccess,
	createVendorFailure,
	updateVendorStart,
	updateVendorSuccess,
	updateVendorFailure,
	deleteVendorStart,
	deleteVendorSuccess,
	deleteVendorFailure,
} from "./vendorSlice";
import { authRequest, publicRequest } from "./requestMethods";

//Fetch Vendors
export const fetchVendors = async (dispatch) => {
	dispatch(fetchVendorStart());
	try {
		const res = await publicRequest.get("vendors");
		await dispatch(fetchVendorSuccess(res.data));
	} catch (error) {
		dispatch(fetchVendorFailure());
	}
};

//Create Vendors
export const createVendor = async (dispatch, data) => {
	dispatch(createVendorStart());
	try {
		const res = await publicRequest.post("vendors/new", data);
		await dispatch(createVendorSuccess(res.data));
	} catch (error) {
		dispatch(createVendorFailure());
	}
};

//Update Vendors
export const updateVendor = async (data, dispatch) => {
	dispatch(updateVendorStart());
	try {
		const res = await publicRequest.put(`vendors/${data.vendor._id}`, data);
		await dispatch(updateVendorSuccess({ data: res.data, buy: data.buy }));
	} catch (error) {
		dispatch(updateVendorFailure());
	}
};

//Delete Vendors
export const deleteVendor = async (id, dispatch) => {
	dispatch(deleteVendorStart());
	try {
		await authRequest.delete(`vendors/${id}`);
		await dispatch(deleteVendorSuccess({ id }));
	} catch (error) {
		dispatch(deleteVendorFailure());
	}
};
