import React, { useEffect, useState } from "react";
import { FaPepperHot } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./services/authServices";

const Comfirmation = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
  }, []);
  const { address } = JSON.parse(localStorage.getItem("user") || "[]");
  let orders = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const total = orders.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );

  const formatter = new Intl.NumberFormat("en-CA", {
    currency: "CAD",
    style: "currency",
  });

  const handleCartItems = () => {
    localStorage.removeItem("cartItems");
    window.location = "/";
  };
  return (
    <div className="w-3/4 lg:w-2/6  m-auto h-full mb-5 mt-4">
      <h2 className="text-2xl font-bold text-green-600 mb-5">
        Comfirmation Reciept
      </h2>
      <div class="card w-full  h-full pt-2 bg-gray-100">
        <FaPepperHot className="card-img-top text-red-500" size="30" />

        <div className="card-body font-bold bg-gray-50">
          <h5 className="card-title">Delivery Address</h5>
          <p className="card-text">Street: {address.street}</p>
          <p className="card-text">City: {address.city}</p>
          <p className="card-text">Province: {address.province}</p>
        </div>
        <table class="table ">
          <thead>
            <tr className="bg-gray-200">
              <th scope="col">Item</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr>
                  <td>{order.title}</td>
                  <td>{order.quantity}</td>
                  <td>{formatter.format(order.price)}</td>
                </tr>
              );
            })}

            <tr className="bg-gray-200 font-bold">
              <td></td>
              <td>Total: </td>
              <td>{formatter.format(total)}</td>
            </tr>
          </tbody>
        </table>
        <div className="card-body">
          <h1 className="font-semibold p-2 font-mono">
            Thank you for your business!
            <br /> Payment will be charded on the card you provided, please feel
            free to contact us with any inquiries. Enjoy your delicious meal,
            see you again.
          </h1>
        </div>
      </div>

      <Link to="/">
        <div className="text-center mt-5">
          <button
            className="btn btn-warning text-white font-semibold"
            onClick={handleCartItems}
          >
            Back to Main Page
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Comfirmation;
