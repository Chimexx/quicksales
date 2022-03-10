import {
	fetchCustomerStart,
	fetchCustomerSuccess,
	fetchCustomerFailure,
	createCustomerStart,
	createCustomerSuccess,
	createCustomerFailure,
	updateCustomerStart,
	updateCustomerSuccess,
	updateCustomerFailure,
	deleteCustomerStart,
	deleteCustomerSuccess,
	deleteCustomerFailure,
} from "./customerSlice";
import { authRequest, publicRequest } from "./requestMethods";

//Fetch Customers
export const fetchCustomers = async (dispatch) => {
	dispatch(fetchCustomerStart());
	try {
		const res = await publicRequest.get("customers");
		await dispatch(fetchCustomerSuccess(res.data));
	} catch (error) {
		dispatch(fetchCustomerFailure());
	}
};

//Create Customers
export const createCustomer = async (dispatch, data) => {
	dispatch(createCustomerStart());
	try {
		console.log(data);
		const res = await publicRequest.post("customers/new", data);
		await dispatch(createCustomerSuccess(res.data));
	} catch (error) {
		dispatch(createCustomerFailure());
	}
};

//Update Customers
export const updateCustomer = async (data, dispatch) => {
	console.log(data);
	dispatch(updateCustomerStart());
	try {
		const res = await publicRequest.put(`customers/${data.customer._id}`, data);
		if (data.sale) {
			// await dispatch(updateCustomerSuccess({ data: res.data, total: data.total, sale: data.sale }));
		}
		// await dispatch(updateCustomerSuccess({ data: res.data, sale: info.sale }));
	} catch (error) {
		dispatch(updateCustomerFailure());
	}
};

//Delete Customers
export const deleteCustomer = async (id, dispatch) => {
	dispatch(deleteCustomerStart());
	try {
		await authRequest.delete(`customers/${id}`);
		await dispatch(deleteCustomerSuccess({ id }));
	} catch (error) {
		dispatch(deleteCustomerFailure());
	}
};
