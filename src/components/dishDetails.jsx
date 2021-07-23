import React, { useContext } from "react";
import { toast } from "react-toastify";
import { getAllImages } from "../common/data";
import { Context } from "../context";
// import Counter from "./counter";

// import OrderButton from "./orderButton";

const DishDetails = (props) => {
  const { count } = useContext(Context);
  let [value, setDishes] = count;

  let inCart = value;
  const dishes = getAllImages();
  let dishId = props.match.params.id;

  dishId = dishId.split(":");
  dishId = parseInt(dishId[1]);

  const dish = dishes.filter((d) => d.id === dishId);
  const price = dish[0].price;

  const handleDecrement = () => {
    setDishes(value - 1);
    if (value > 1) {
      console.log("delete this");
    }
  };

  const handleIncrement = () => {
    setDishes(value + 1);
  };

  const handleAddOrder = () => {
    props.history.push("/");
    if (value !== 0) {
      inCart = 0;
      toast.success(`${value} ${dish[0].title} added to cart`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };

  const theId = props.match.params.id;
  console.log(theId);
  return (
    <div className="px-3 min-h-screen w-full">
      <div className="lg:flex ">
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

              <div className="m-4 text-center pt-10 w-full">
                <span className="font-bold">{d.title}</span>
                <span className="block text-red-500 font-bold">${d.price}</span>
                <p>{d.description}</p>

                {/* <OrderButton type="Place Order" onOrder={handleAddOrder} /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DishDetails;
