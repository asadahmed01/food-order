import React from "react";
import { FaTrash } from "react-icons/fa";
import { removeItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function DeleteButton({ count, id }) {
  const dispatch = useDispatch();

  function deleteFromLocalStorage(id) {
    const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const arr = [];
    stored.map((item) => {
      if (item.id !== id) arr.push(item);
      return arr;
    });
    localStorage.setItem("cartItems", JSON.stringify(arr));
    console.log(arr);
  }
  function handleDelete() {
    deleteFromLocalStorage(id);
    dispatch(removeItem(id));
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
