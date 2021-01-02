import React, { useContext, useState } from "react";
import { Context } from "../context";

const Counter = () => {
  const { count } = useContext(Context);
  const [dishes, setDishes] = count;

  return (
    <div>
      <div className="flex items-center">
        <button
          className="bg-yellow-600 text-white 
    font-bold py-2 px-4 rounded mt-5 hover:bg-yellow-700"
          onClick={() => setDishes(dishes + 1)}
        >
          +
        </button>

        <button
          className="bg-gray-200 text-yellow-700 
    font-bold py-2 px-4 rounded mt-5"
        >
          <span className={getBadgeClasses()}>
            {formatCount()}
            {dishes}
          </span>
        </button>

        <button
          className="bg-yellow-600 text-white 
    font-bold py-2 px-4 rounded mt-5 hover:bg-yellow-700"
          onClick={() => setDishes(dishes - 1)}
          disabled={dishes === 0 && "true"}
        >
          -
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

function formatCount() {
  //const { value } = this.props.counter;
  //return value === 0 ? "Zero" : value;
}
//}

// export default Counter;
