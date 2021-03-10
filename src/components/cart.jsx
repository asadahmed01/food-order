import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Cart() {
  const dishes = useSelector((state) => state.products);
  console.log(dishes.length);
  return (
    <div>
      <React.Fragment>
        <div>
          <FaShoppingCart />
        </div>
      </React.Fragment>
    </div>
  );
}

export default Cart;
