import React from "react";

const ItemCard = (props) => {
  return (
    <div className="w-full m-auto grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {props.orders.map((order) => (
        <div className="card" key={order._id}>
          <div className="card-body">
            <div className="bg-transparent text-left">
              <img src={order.url} alt="dish image" className="w-24 h-22" />
            </div>

            <h5 className="card-title font-bold">Title: {order.title}</h5>
            <h6 className="card-subtitle mb-2 font-bold text-yellow-700">
              Price: ${order.price}
            </h6>

            <p className="font-bold">Qty: {order.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
