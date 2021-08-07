import React from "react";
import { FaTrash } from "react-icons/fa";
import { removeItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function DeleteButton({ count, _id }) {
  const dispatch = useDispatch();

  function deleteFromLocalStorage(_id) {
    const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const arr = [];
    stored.map((item) => {
      if (item._id !== _id) arr.push(item);
      return arr;
    });
    localStorage.setItem("cartItems", JSON.stringify(arr));
    console.log(arr);
  }
  function handleDelete() {
    deleteFromLocalStorage(_id);
    dispatch(removeItem(_id));
  }
  return (
    <div>
      <span onClick={count < 2 ? handleDelete : undefined}>
        <FaTrash />
      </span>
    </div>
  );
}

export default DeleteButton;
