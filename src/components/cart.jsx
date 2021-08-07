import React from "react";
import { useSelector } from "react-redux";
import Counter from "./counter";
import { useDispatch } from "react-redux";
import { incrementItem, decrementItem, clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./services/authServices";

function Cart() {
  const dispatch = useDispatch();
  let dishes = useSelector((state) => state.products);

  const total = dishes.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
  const currentUser = getCurrentUser();
  console.log(currentUser);

  //determine which page to show user depending if they are registered and/or have
  //updated address in the file
  const nextPage = () => {
    if (!currentUser) {
      return "/login";
    }
    // if (Object.keys(currentUser.address).length === 0) {
    //   return "/address";
    // }
    return "/summary";
  };

  const clearTheCart = () => {
    localStorage.removeItem("cartItems");
    dispatch(clearCart());
  };
  const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(dishes));
  };
  return (
    <div className="">
      <React.Fragment>
        <div>
          {dishes.map((dish) => {
            return (
              <div key={dish.id}>
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
                  <div className="flex-col self-end border-b mr-5 text-sm md:text-lg">
                    <Counter
                      id={dish.id}
                      onIncrement={() => {
                        dispatch(incrementItem(dish));
                      }}
                      onDecrement={() => {
                        dispatch(decrementItem(dish));
                      }}
                      dishCount={dish.quantity}
                    />
                    <p className="font-semibold">
                      Subtotal: {dish.quantity} x {dish.price} ={" "}
                      <span className="text-red-700 font-semibold">
                        {" "}
                        ${parseFloat(dish.quantity * dish.price).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {dishes.length > 0 ? (
            <div>
              <div className="min-w-full  md:py-4 py-2 md:my-2 pl-2 mt-5 text-xl">
                <p>
                  <span className="text-black font-bold">Total:</span>{" "}
                  <span className="text-red-700 font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </p>
                <hr />
              </div>
              <div className="flex justify-between mt-10 mb-16">
                <div className=" ml-4">
                  <Link to={nextPage()}>
                    <button
                      className="bg-yellow-500 md:px-5 px-2 py-2 md:text-2xl hover:bg-yellow-600 rounded-xl text-white"
                      onClick={saveToLocalStorage}
                    >
                      Place Order
                    </button>
                  </Link>
                </div>

                <div className="md:mr-20 mr-8">
                  <button
                    className="bg-yellow-500 md:px-7 px-3 py-2 md:text-2xl hover:bg-yellow-600 rounded-xl text-white"
                    onClick={clearTheCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full h-screen justify-center">
              <div className="text-xl text-gray-400 self-center">
                {" "}
                <h3>Your Cart is Empty!</h3>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    </div>
  );
}

export default Cart;
