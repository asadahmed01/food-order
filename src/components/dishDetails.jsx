import React, { useContext } from "react";
import { toast } from "react-toastify";
import { getAllImages } from "../common/data";
import { Context } from "../context";
import Counter from "./counter";

import OrderButton from "./orderButton";

const DishDetails = (props) => {
  const { count } = useContext(Context);
  const [value] = count;

  const dishes = getAllImages();
  let dishId = props.match.params.id;

  dishId = dishId.split(":");
  dishId = parseInt(dishId[1]);

  const dish = dishes.filter((d) => d.id === dishId);
  const price = dish[0].price;

  const handleAddOrder = () => {
    props.history.push("/");
    if (value !== 0) {
      toast.success(`${dish[0].title} added to cart`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };
  return (
    <div className="px-3">
      <div className="md:flex">
        {dish.map((d) => {
          return (
            <div
              className="md:flex bg-gray-100  border-yellow-500 rounded-md overflow-hidden cursor-pointer mt-10 md:max-w-4xl"
              key={d.id}
            >
              <div className="md:w-full min-h-full">
                <img
                  src={d.url}
                  className="min-w-full  sm:h-48 object-cover md:min-h-full"
                />
              </div>

              <div className="m-4 text-center pt-10 ">
                <span className="font-bold">{d.title}</span>
                <span className="block text-red-500 font-bold">${d.price}</span>
                <p>{d.description}</p>

                {/* <OrderButton type="Place Order" onOrder={handleAddOrder} /> */}
              </div>
            </div>
          );
        })}
        <div className="pl-32 flex md:items-center md:ml-20">
          <Counter />
        </div>
      </div>

      <div className="bg-yellow-200 py-5 mt-10">
        <p className="font-bold text-xl text-gray-700 pl-3">
          Total Price: <span className="text-yellow-700">${price * value}</span>
        </p>
      </div>
      <OrderButton type="Place Order" onOrder={handleAddOrder} />
    </div>
  );
};

export default DishDetails;
