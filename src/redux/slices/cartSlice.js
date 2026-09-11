import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add to cart - view wishlist component
    addToCart: (state, action) => {
      const existingItem = state?.find(item=> item.id == action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        const remainingItems = state?.filter(
          item => item.id != existingItem.id,
        );
        state = [...remainingItems, existingItem];
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    // remove from cart
    removeCart: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    //increment
     incrementCart: (state, action) => {
      const remainingItems = state?.filter(item => item.id != action.payload);
      const existingItem = state?.find(item=> item.id == action.payload);
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state = [...remainingItems, existingItem];

    },
    //decrement
    decrementCart: (state, action) => {
      const remainingItems = state?.filter(item => item.id != action.payload);
      const existingItem = state?.find(item=> item.id == action.payload);
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state = [...remainingItems, existingItem];

    },
    //empty cart
    emptyCart:(state)=>{
      return []
    }
  }
})

export const {addToCart,removeCart,decrementCart,incrementCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer