import React, { Component } from "react";
import { toast } from "react-toastify";
import { addToCart } from "../store/cartSlice";
import configureStore from "../store/configureStore";
const store = configureStore;
class OrderButton extends Component {
  render() {
    return (
      <button
        className="bg-yellow-600 text-white 
      font-bold py-2 px-4 rounded mt-5 hover:bg-yellow-700"
        onClick={() =>
          store.dispatch(
            addToCart(this.props.onOrder),
            toast.success(`${this.props.onOrder.title} added to cart`, {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: true,
            })
          )
        }
      >
        {this.props.type}
      </button>
    );
  }
}

export default OrderButton;
