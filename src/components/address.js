import React from "react";
import joi from "joi-browser";
import Form from "../common/form";

import { FaSpinner } from "react-icons/fa";
import { updateAddress } from "./services/updateAddress";
import { getCurrentUser } from "./services/authServices";

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
    let user = getCurrentUser();
    this.setState({ loading: true });
    try {
      const response = await updateAddress(this.state.data, user);
      //

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/cart";
    } catch (ex) {
      if (ex.response && ex.response.status == 400) {
        let errors = { ...this.state.errors };
        // errors.email = ex.response.data;
        // errors.password = ex.response.data;
        errors = ex.response.data;
        this.setState({ errors });
      }
    }
    this.setState({ loading: false });
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
          {this.renderInput("country", "Country")}

          {this.state.loading ? (
            <FaSpinner className="animate-spin text-5xl ml-40 mt-20 text-yellow-400" />
          ) : (
            this.renderButton("Save Address")
          )}
          {this.state.errors && (
            <div className="text-yellow-600">{this.state.errors.msg}</div>
          )}
        </form>
      </div>
    );
  }
}

export default Address;
