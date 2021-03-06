import { createSlice, current } from "@reduxjs/toolkit";

const buyCartSlice = createSlice({
	name: "buyCart",
	initialState: {
		buyCartItems: [],
		buyCartTotalAmount: 0,
	},
	reducers: {
		addToBuyCart: (state, action) => {
			const index = current(state.buyCartItems).findIndex(
				(item) => item._id === action.payload.item._id
			);

			if (index >= 0) {
				state.buyCartItems[index].onHandQty += 1;
			} else {
				state.buyCartItems.unshift({ ...action.payload.item, onHandQty: 1 });
			}
		},
		decQty: (state, action) => {
			const index = state.buyCartItems.findIndex((item) => item._id === action.payload.item._id);
			if (state.buyCartItems[index].onHandQty > 1) {
				state.buyCartItems[index].onHandQty -= 1;
			} else if ((state.buyCartItems[index].onHandQty = 1)) {
				return;
			}
		},
		directInput: (state, action) => {
			const index = current(state.buyCartItems).findIndex(
				(item) => item._id === action.payload.item._id
			);
			console.log(action.payload.value);
			state.buyCartItems[index].onHandQty = action.payload.value;
		},
		directCost: (state, action) => {
			const index = current(state.buyCartItems).findIndex(
				(item) => item._id === action.payload.item._id
			);

			state.buyCartItems[index].costPrice = action.payload.value;
		},
		removeFromBuyCart: (state, action) => {
			const newItems = state.buyCartItems.filter((item) => item._id !== action.payload.item._id);
			state.buyCartItems = newItems;
		},

		clearBuyCart: (state, action) => {
			state.buyCartItems = [];
		},

		getTotals: (state, action) => {
			//reduce takes in a callback function(accumulator and an iterator)
			//and another parameter of initial values, in this case an object
			let { totalAmount } = state.buyCartItems.reduce(
				(cartTotal, buyCartItem) => {
					const { costPrice, onHandQty } = buyCartItem;

					//calculating total for each item in the cart
					const itemTotal = costPrice * onHandQty;

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

export const { addToBuyCart, removeFromBuyCart, decQty, clearBuyCart, directInput, directCost, getTotals } =
	buyCartSlice.actions;
export const getBuyCart = (state) => state.buyCart;
export default buyCartSlice.reducer;
