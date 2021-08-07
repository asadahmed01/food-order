import React from "react";
import { getCurrentUser } from "./services/authServices";
import { updateOrders } from "./services/updateOrders";
import StripeCheckout from "react-stripe-checkout";
import { checkout } from "./services/checkout";
import { toast } from "react-toastify";

const OrderSummary = (props) => {
  const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const total = items.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
  const user = getCurrentUser();

  async function submitOrders() {
    const orders = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const user = getCurrentUser();

    try {
      const res = await updateOrders(orders, user);

      window.location = "/comfirmation";
    } catch (error) {}
  }

  async function handleCheckout(token, addresses) {
    const response = await checkout(token, items, user.id);
    const { status, user: usr } = response.data;
    localStorage.setItem("user", JSON.stringify(usr));

    if (status === "success") {
      submitOrders();
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
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

      <div className="flex justify-between mt-20 border-b-2 border-gray-400 pb-5">
        <p className="font-bold text-lg">Total: ${total}</p>

        <StripeCheckout
          stripeKey="pk_test_51JGcqTCK6hSW8rlmkkjm7cQkBSEdeceQdhoj0xkPCpuPWrHccciDKDfxFNED6jLQ6zCzTbUiiT6TOXVqLd6s98Rg00DA9gg2yj"
          amount={total * 100}
          name={items[0].title + "..."}
          token={handleCheckout}
          billingAddress
          shippingAddress
        />
      </div>
    </div>
  );
};

export default OrderSummary;
