import React, { useState } from "react";
import { getCurrentUser } from "./services/authServices";
import { updateOrders } from "./services/updateOrders";

const OrderSummary = (props) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
  //const orders = localStorage.getItem("cartItems");
  //console.log(items);

  //console.log(id);

  function submitOrders(e) {
    const orders = JSON.parse(localStorage.getItem("cartItems") || "[]");
    //setData(orders);
    const user = getCurrentUser();

    //e.preventDefault();
    try {
      updateOrders(orders, user);
      //window.location = "/cart";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="md:w-1/2 w-3/4 mx-auto h-screen mt-10">
      <h1 className="my-5 font-bold text-3xl">Order Summary</h1>
      <table className="table table-striped table-borderless">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td className="py-3">{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between mt-20">
        <p className="font-bold text-lg">Total: $13.50</p>
        <button
          type="submit"
          className="btn btn-warning font-bold text-lg"
          onClick={submitOrders}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
