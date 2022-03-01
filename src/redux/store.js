import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import vendorReducer from "./vendorSlice";
import departmentReducer from "./departmentSlice";
import buyCartReducer from "./BuyCartSlice";
import sellCartReducer from "./SellCartSlice";
import customerReducer from "./customerSlice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};
const rootReducer = combineReducers({
	products: productReducer,
	buyCart: buyCartReducer,
	sellCart: sellCartReducer,
	vendors: vendorReducer,
	departments: departmentReducer,
	customers: customerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);
