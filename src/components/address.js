import React from "react";
import joi from "joi-browser";
import Form from "../common/form";
import * as userServices from "./services/userService";
import { FaSpinner } from "react-icons/fa";

class Address extends Form {
  state = {
    data: { street: "", city: "", postalCode: "", province: "", country: "" },
    errors: {},
    loading: false,
  };

  schema = {
    street: joi.string().required().label("Street"),
    city: joi.string().required().min(5).label("City"),
    postalCode: joi.string().required().label("Post Code"),
    province: joi.string().required(),
    country: joi.string().required(),
  };

  doSubmit = async () => {
    console.log("delivery");
  };

  render() {
    return (
      <div className="mt-20 pt-10 min-h-screen flex self-center justify-center">
        <form onSubmit={this.handleSubmit}>
          <h1 className="font-bold mb-5 text-yellow-800 text-2xl">
            Register Here
          </h1>
          {this.renderInput("street", "Street")}
          {this.renderInput("city", "City")}
          {this.renderInput("postalCode", "postal Code")}
          {this.renderInput("province", "Province")}
          {this.renderInput("Country", "Country")}
          {this.state.errors.msg}
          {this.state.loading ? (
            <FaSpinner className="animate-spin text-5xl ml-40 mt-20 text-yellow-400" />
          ) : (
            this.renderButton("Save Address")
          )}
        </form>
      </div>
    );
  }
}

export default Address;
