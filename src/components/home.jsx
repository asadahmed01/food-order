import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Card from "./card";

import axios from "axios";

const Home = () => {
  //const [products, setProducts] = useState([]);

  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const allproductEndpoint = process.env.REACT_APP_ALLPRODUCT;
  useEffect(() => {
    const allProducts = () => {
      setIsLoading(true);
      return axios
        .get(allproductEndpoint)
        .then(function (response) {
          setproducts(response.data);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    allProducts();
  }, []);

  return (
    <div>
      <main className="bg-gray-100 px-16 py-6 min-h-screen">
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Menu</h2>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Our Menu
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
