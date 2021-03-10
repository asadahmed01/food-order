import { combineReducers } from "redux";
import productsReducer from "./cartSlice";

export default combineReducers({
  products: productsReducer,
});
