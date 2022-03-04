import { createSlice, current } from "@reduxjs/toolkit";

const sellCartSlice = createSlice({
	name: "sellCart",
	initialState: {
		sellCartItems: [],
		sellCartTotalAmount: 0,
	},
	reducers: {
		addToSellCart: (state, action) => {
			const index = current(state.sellCartItems).findIndex(
				(item) => item._id === action.payload.item._id
			);

			if (index >= 0) {
				state.sellCartItems[index].onHandQty += 1;
			} else {
				state.sellCartItems.unshift({ ...action.payload.item, onHandQty: 1 });
			}
		},
		decQty: (state, action) => {
			const index = state.sellCartItems.findIndex((item) => item._id === action.payload.item._id);
			if (state.sellCartItems[index].onHandQty > 1) {
				state.sellCartItems[index].onHandQty -= 1;
			} else if ((state.sellCartItems[index].onHandQty = 1)) {
				return;
			}
		},
		directInput: (state, action) => {
			const index = current(state.sellCartItems).findIndex(
				(item) => item._id === action.payload.item._id
			);
			state.sellCartItems[index].onHandQty = action.payload.value;
		},
		directPrice: (state, action) => {
			const index = current(state.sellCartItems).findIndex(
				(item) => item._id === action.payload.item._id
			);

			state.sellCartItems[index].salesPrice = action.payload.value;
		},
		removeFromSellCart: (state, action) => {
			const newItems = state.sellCartItems.filter((item) => item._id !== action.payload._id);
			state.sellCartItems = newItems;
		},

		clearSellCart: (state, action) => {
			state.sellCartItems = [];
		},

		getTotals: (state, action) => {
			//reduce takes in a callback function(accumulator and an iterator)
			//and another parameter of initial values, in this case an object
			let { totalAmount } = state.sellCartItems.reduce(
				(cartTotal, sellCartItem) => {
					const { salesPrice, onHandQty } = sellCartItem;

					//calculating total for each item in the cart
					const itemTotal = salesPrice * onHandQty;

					//summing up totals of each cartItem
					cartTotal.totalAmount += itemTotal;

					return cartTotal;
				},
				//initial values
				{
					totalAmount: 0,
				}
			);

			state.sellCartTotalAmount = totalAmount;
		},
	},
});

export const {
	addToSellCart,
	removeFromSellCart,
	decQty,
	clearSellCart,
	directInput,
	directPrice,
	getTotals,
} = sellCartSlice.actions;
export const getSellCart = (state) => state.sellCart;
export default sellCartSlice.reducer;
