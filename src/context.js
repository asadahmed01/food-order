import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { getAllImages } from "./common/data";

export const Context = createContext();

export const OrderProvider = (props) => {
  const [images, setImages] = useState(getAllImages());
  const [dishes, setDishes] = useState(0);

  useEffect(async () => {
    const result = await axios("http://localhost:3900/api/movies");

    console.log(result.data);
  });

  return (
    <Context.Provider
      value={{ data: [images, setImages], count: [dishes, setDishes] }}
    >
      {props.children}
    </Context.Provider>
  );
};
