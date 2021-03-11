import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
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
      return products.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const { addToCart, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
