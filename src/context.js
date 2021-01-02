import React, { useState, createContext } from "react";
import { getAllImages } from "./common/data";

export const Context = createContext();

export const OrderProvider = (props) => {
  const [images, setImages] = useState(getAllImages());
  const [dishes, setDishes] = useState(0);

  return (
    <Context.Provider
      value={{ data: [images, setImages], count: [dishes, setDishes] }}
    >
      {props.children}
    </Context.Provider>
  );
};
