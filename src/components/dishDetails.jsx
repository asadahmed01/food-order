import axios from "axios";
import React, { useEffect, useState } from "react";

// import OrderButton from "./orderButton";

const DishDetails = (props) => {
  const [dish, setdish] = useState({});

  const id = props.match.params.id;

  const oneproductEndpoint = process.env.REACT_APP_ONEPRODUCT;
  useEffect(() => {
    const OneProducts = () => {
      return axios
        .get(oneproductEndpoint, { params: { id } })
        .then(function (response) {
          console.log(response);
          setdish(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    OneProducts();
  }, []);

  return (
    <div className="px-3 min-h-screen w-full">
      <div className="lg:flex ">
        <div className="md:flex bg-gray-100  border-yellow-500 rounded-md overflow-hidden cursor-pointer mt-10 md:max-w-4xl">
          <div className="md:w-full min-h-full">
            <img
              src={dish.selectedFile}
              className="min-w-full  sm:h-48 object-cover md:min-h-full"
            />
          </div>

          <div className="m-4 text-center pt-10 w-full">
            <span className="font-bold">{dish.title}</span>
            <span className="block text-red-500 font-bold">${dish.price}</span>
            <p>{dish.description}</p>

            {/* <OrderButton type="Place Order" onOrder={handleAddOrder} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
