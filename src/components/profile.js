import axios from "axios";
import formdata from "form-data";
import React, { useEffect, useState } from "react";
import Card from "./card";
import CreateProduct from "./createProduct";
import ItemCard from "./ItemCard";
import { getCurrentUser, logout } from "./services/authServices";
import { deleteAccount } from "./services/deleteAccount";

function Profile() {
  const [currUser, setCurrUser] = useState({});
  const [file, setfile] = useState(null);

  const person = getCurrentUser();

  const userEndpoint = process.env.REACT_APP_ENDPOINT;
  const productEndpoint = process.env.REACT_APP_PRODUCT;

  useEffect(() => {
    userDetails();
  }, []);

  const userDetails = () => {
    return axios
      .post(userEndpoint, {
        id: person.id,
      })
      .then(function (response) {
        const data = response.data;

        setCurrUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setfile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  //remove the user account
  const handleRemove = () => {
    deleteAccount(person.id);
    logout();
    window.location = "/signup";
  };

  const { address, email, name, orders } = currUser;

  return (
    <div className="min-h-screen text-center mt-20 container md:w-3/4">
      <div
        className="accordion accordion-flush md:w-3/4"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-personalInfo">
            <button
              className="accordion-button collapsed bg-gray-100 focus:border  focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Personal Info
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-personalInfo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-left">
              {currUser && (
                <div>
                  <h2 className="text-2xl font-bold my-3">Personal Info </h2>
                  <p>
                    <span className="font-semibold text-xl">Email:</span>{" "}
                    {email}
                  </p>
                  <p>
                    <span className="font-semibold text-xl">Name:</span> {name}
                  </p>
                </div>
              )}

              <button
                className="bg-red-300 py-1 px-2 mt-3 rounded-md font-semibold text-2xl shadow-md hover:bg-red-500 hover:text-white focus:outline-none "
                onClick={() =>
                  window.confirm(
                    "Are you sure you want to DELETE your account permanently?"
                  ) && handleRemove()
                }
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed bg-gray-100 focus:border  focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Address
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-left">
              {address && (
                <div>
                  <h2 className="text-2xl font-bold my-3">Address</h2>
                  <p>
                    <span className="font-semibold text-xl">Street:</span>{" "}
                    {address.street}
                  </p>
                  <p>
                    <span className="font-semibold text-xl">City:</span>{" "}
                    {address.city}
                  </p>
                  <p>
                    <span className="font-semibold text-xl">Province:</span>{" "}
                    {address.province}
                  </p>
                  <p>
                    <span className="font-semibold text-xl">Country:</span>{" "}
                    {address.country}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed bg-gray-100 focus:border  focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Orders
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-left">
              <div>
                {!Array.isArray(orders) || !orders ? (
                  <h2>You did not order any dishes in the past.</h2>
                ) : (
                  <div>
                    <h2>Your Past Orders</h2>
                    <ItemCard orders={orders} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

{
}
