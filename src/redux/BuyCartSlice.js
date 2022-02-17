import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	buyCartItems: localStorage.getItem("buyCartItems")
		? JSON.parse(localStorage.getItem("buyCartItems"))
		: [],
};

const buyCartSlice = createSlice({
	name: "buyCart",
	initialState,
	reducers: {
		addToBuyCart: (state, action) => {
			const itemIndex = state.buyCartItems.findIndex((item) => item.id === action.payload.id);
			if (itemIndex >= 0) {
				state.buyCartItems[itemIndex].ohq += 1;
			} else {
				state.buyCartItems.push(action.payload);
			}

			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},

		removeFromBuyCart: (state, action) => {
			const newItems = state.buyCartItems.filter((item) => item._id !== action.payload._id);
			state.buyCartItems = newItems;

			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},

		decQty: (state, action) => {
			const itemIndex = state.buyCartItems.findIndex((item) => item._id === action.payload._id);
			if (state.buyCartItems[itemIndex].quantity > 1) {
				state.buyCartItems[itemIndex].quantity -= 1;
			} else if ((state.buyCartItems[itemIndex].quantity = 1)) {
				const newItems = state.buyCartItems.filter((item) => item._id !== action.payload._id);
				state.buyCartItems = newItems;
			}
			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},
		clearBuyCart: (state, action) => {
			state.buyCartItems = [];
			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},
	},
});

export const { addToBuyCart, removeFromBuyCart, decQty, clearBuyCart } = buyCartSlice.actions;
export const getBuyCart = (state) => state.buyCart;
export default buyCartSlice.reducer;
