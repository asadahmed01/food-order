import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrderButton from "./orderButton";

class Card extends Component {
  render() {
    return (
      <div className="mt-8 grid md:grid-cols-4 md:gap-4 gap-8">
        {/* cards go here */}

        {this.props.data.map((item) => {
          return (
            <div
              className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl max-w-xs cursor-pointer text-center pb-5"
              key={item.id}
            >
              <Link to={`dishes/:${item.id}`} key={item.id}>
                <div className="border-b border-1 border-gray-100">
                  <img
                    src={item.url}
                    alt="image"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4 text-center pt-10 ">
                    <span className="font-bold">{item.title}</span>
                    <span className="block text-red-500">${item.price}</span>
                  </div>
                </div>
              </Link>

              <OrderButton onOrder={item} type="Order Now" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
