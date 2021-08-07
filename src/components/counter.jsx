import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import DeleteButton from "./deleteButton";

const Counter = (props) => {
  return (
    <div className="mb-16">
      <div className="flex items-center">
        <button
          className="bg-yellow-600 text-white 
    font-bold py-2 px-2 rounded mt-5 hover:bg-yellow-700"
          onClick={props.onIncrement}
        >
          <FaPlus />
        </button>

        <button
          className="bg-gray-200 text-yellow-700 
    font-bold py-1 px-3 rounded mt-5"
        >
          <span className={getBadgeClasses()}>{props.dishCount}</span>
        </button>

        {/* the minus button and delete button  combined conditionally */}
        <button
          className={` bg-yellow-600 text-white
    font-bold  rounded mt-5 hover:bg-yellow-700 ${
      props.dishCount > 1 ? " py-2 px-2 " : "py-2 px-2"
    }`}
          disabled={props.dishCount === 0 && true}
          onClick={props.onDecrement}
        >
          {props.dishCount > 1 ? (
            <FaMinus />
          ) : (
            <DeleteButton count={props.dishCount} _id={props.id} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Counter;

function getBadgeClasses() {
  let classes = "";
  //classes += this.props.counter.value === 0 ? "" : "";
  return classes;
}
