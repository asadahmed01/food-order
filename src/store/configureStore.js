import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import productsReducer from "./cartSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});

// export default function () {
//   return configureStore({
//     reducer,
//   });
// }
