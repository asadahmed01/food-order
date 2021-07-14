import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  reducers: {
    // addToCart: (products, action) => {
    //   products.push(action.payload);
    // },
    addToCart: (products, action) => {
      const dish = products.find((item) => item.id === action.payload.id);

      if (dish) {
        return products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        products.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    incrementItem: (products, action) => {
      return products.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    decrementItem: (products, action) => {
      return (products = products.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    },

    removeItem: (products, action) => {
      return products.filter((item) => item.id !== action.payload);
    },

    clearCart: () => [],
  },
});

export const {
  addToCart,
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
