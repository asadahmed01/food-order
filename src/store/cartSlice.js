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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
