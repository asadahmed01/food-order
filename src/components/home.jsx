import React, { useContext, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Card from "./card";
import { Context } from "../context";
import axios from "axios";

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const { data } = useContext(Context);
  const [images, setImages] = data;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("http://localhost:5000/api/products");

      setProducts(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(products);
  return (
    <div>
      <main className="bg-gray-100 px-16 py-6 min-h-screen">
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Menu</h2>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>

          {isLoading ? (
            <div className="flex place-content-center mt-80 animate-spin">
              <FaSpinner className="animate-spin text-5xl text-yellow-600" />
            </div>
          ) : (
            <Card data={products} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
