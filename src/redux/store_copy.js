import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import productReducer from "./productSlice";
import buyCartReducer from "./BuyCartSlice";

const rootReducer = combineReducers({
	// items: productReducer,
	buyCart: buyCartReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export default store;
