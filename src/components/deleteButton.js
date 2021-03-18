import React from "react";
import { FaTrash } from "react-icons/fa";
import { removeItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function DeleteButton({ count, id }) {
  const dispatch = useDispatch();
  console.log(count);
  function handleDelete() {
    console.log("deleted");
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
