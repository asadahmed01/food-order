import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";

function Cart() {
  const dishes = useSelector((state) => state.products);
  const total = dishes.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
  console.log(total);
  return (
    <div>
      <React.Fragment>
        <div>
          {dishes.map((dish) => {
            return (
              <div>
                <div className="mt-8 grid grid-cols-2 md:gap-8 gap-2">
                  <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl max-w-xs cursor-pointer text-center pb-5">
                    <div className="border-t border-1 border-gray-100">
                      <img
                        src={dish.url}
                        alt="image"
                        className="w-full h-32 sm:h-48 object-cover"
                      />
                      <div className="m-4 text-center pt-10">
                        <span className="font-bold">{dish.title}</span>
                        <span className="block text-red-500">
                          ${dish.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* the total price column */}
                  <div className="flex self-end border-b mr-5 text-sm md:text-lg">
                    <p className="font-semibold">
                      Subtotal: {dish.quantity} x {dish.price} ={" "}
                      <span className="text-red-700 font-semibold">
                        {" "}
                        ${dish.quantity * dish.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="min-w-full bg-yellow-400 md:py-4 py-2 md:my-2 pl-2 mt-5">
            <p>
              <span className="text-white font-semibold">Total:</span>{" "}
              <span className="text-red-700 font-semibold">${total}</span>
            </p>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Cart;
