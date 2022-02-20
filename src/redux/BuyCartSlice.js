import { createSlice, current } from "@reduxjs/toolkit";

const buyCartSlice = createSlice({
	name: "buyCart",
	initialState: {
		buyCartItems: [],
		// buyCartItems: localStorage.getItem("buyCartItems")
		// 	? JSON.parse(localStorage.getItem("buyCartItems"))
		// 	: [],
		buyCartTotalAmount: 0,
	},
	reducers: {
		addToBuyCart: (state, action) => {
			const index = current(state.buyCartItems).findIndex(
				(item) => item._id === action.payload.item._id
			);

			if (index >= 0) {
				state.buyCartItems[index].ohq += 1;
			} else {
				state.buyCartItems.push(action.payload.item);
			}
			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},
		decQty: (state, action) => {
			const index = state.buyCartItems.findIndex((item) => item._id === action.payload.item._id);
			if (state.buyCartItems[index].ohq > 1) {
				state.buyCartItems[index].ohq -= 1;
			} else if ((state.buyCartItems[index].ohq = 1)) {
				return;
			}
			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},
		directInput: (state, action) => {
			const index = current(state.buyCartItems).findIndex(
				(item) => item._id === action.payload.item._id
			);
			console.log(action.payload.value);
			state.buyCartItems[index].ohq = action.payload.value;

			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},
		removeFromBuyCart: (state, action) => {
			const newItems = state.buyCartItems.filter((item) => item._id !== action.payload.item._id);
			state.buyCartItems = newItems;

			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},

		clearBuyCart: (state, action) => {
			state.buyCartItems = [];
			localStorage.setItem("buyCartItems", JSON.stringify(state.buyCartItems));
		},

		getTotals: (state, action) => {
			//reduce takes in a callback function(accumulator and an iterator)
			//and another parameter of initial values, in this case an object
			let { totalAmount } = state.buyCartItems.reduce(
				(cartTotal, buyCartItem) => {
					const { costPrice, ohq } = buyCartItem;

					//calculating total for each item in the cart
					const itemTotal = costPrice * ohq;

					//summing up totals of each cartItem
					cartTotal.totalAmount += itemTotal;

					return cartTotal;
				},
				//initial values
				{
					totalAmount: 0,
				}
			);

			state.buyCartTotalAmount = totalAmount;
		},
	},
});

export const { addToBuyCart, removeFromBuyCart, decQty, clearBuyCart, directInput, getTotals } =
	buyCartSlice.actions;
export const getBuyCart = (state) => state.buyCart;
export default buyCartSlice.reducer;
