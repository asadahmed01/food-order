import React from "react";
import { FaPepperHot } from "react-icons/fa";
function OrderSummary(props) {
  return (
    <div className="h-full bg-gray-100 text-center">
      <div className="flex flex-row place-content-center">
        <h3 className="py-5">Thank You for Dinning with Us.</h3>
      </div>

      <div className="bg-white m-3.5 h-full">
        <h1 className="text-3xl pt-10">Order Summary</h1>

        <aside className="h-screen">
          <header>
            <p>Your Cart 2 items</p>
          </header>

          <div>
            <ul className="mt-40">
              <li>
                <a>
                  <img />
                </a>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <p>Product Name</p>
                    <p>Product Description</p>
                  </div>

                  <p>Price $56.89</p>
                </div>
              </li>

              <li>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <p>Product Name</p>
                    <p>Product Description</p>
                  </div>

                  <p>Price $56.89</p>
                </div>
              </li>
            </ul>
          </div>

          <footer>
            <ul className="text-sm flex flex-column gap-xxs">
              <li className="flex justify-between">
                <i>Subtotal</i> <i>$98.00</i>
              </li>
              <li className="flex justify-between">
                <i>Tax</i> <i>$10.00</i>
              </li>
              <li className="flex justify-between">
                <i>Delivery</i> <i>Free</i>
              </li>
              <li className="flex justify-between font-bold">
                <i>Total</i> <i>$108.00</i>
              </li>
            </ul>
          </footer>
        </aside>
      </div>
    </div>
  );
}

export default OrderSummary;
