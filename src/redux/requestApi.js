import { publicRequest } from "../requestMethods";
import {
	fetchItemsFailure,
	fetchItemsStart,
	fetchItemsSuccess,
	fetchMeatFailure,
	fetchMeatStart,
	fetchMeatSuccess,
	fetchSauceFailure,
	fetchSauceStart,
	fetchSauceSuccess,
} from "./productSlice";

export const itemsFetch = async (dispatch, cat) => {
	dispatch(fetchItemsStart());
	try {
		const res = cat
			? await publicRequest.get(`dishes?category=${cat}`)
			: await publicRequest.get("dishes");
		await dispatch(fetchItemsSuccess(res.data));
	} catch (error) {
		dispatch(fetchItemsFailure());

		console.log(error);
	}
};

export const meatFetch = async (dispatch) => {
	dispatch(fetchMeatStart());

	try {
		const res = await publicRequest.get("meat");
		await dispatch(fetchMeatSuccess(res.data));
	} catch (error) {
		dispatch(fetchMeatFailure());
		console.log(error);
	}
};

export const sauceFetch = async (dispatch) => {
	dispatch(fetchSauceStart());
	try {
		const res = await publicRequest.get("sauce");
		await dispatch(fetchSauceSuccess(res.data));
	} catch (error) {
		dispatch(fetchSauceFailure());
		console.log(error);
	}
};
