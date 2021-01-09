import React, { useContext } from "react";
// import NavBar from "./navBar";
// import OrderButton from "./orderButton";
// import { getAllImages } from "../common/data";
// import { Link } from "react-router-dom";
// import DishDetails from "./dishDetails";
import Card from "./card";
import { Context } from "../context";

const Home = (props) => {
  const { data } = useContext(Context);
  const [images, setImages] = data;

  console.log(images);
  return (
    <div>
      <main className="bg-gray-100 px-16 py-6">
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Menu</h2>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>
          <Card data={images} />
        </div>
      </main>
    </div>
  );
};

export default Home;
