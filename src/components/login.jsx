import React from "react";
import joi from "joi-browser";
import Form from "../common/form";
import * as authServices from "./services/authServices";
import { FaSpinner } from "react-icons/fa";

class login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    loading: false,
  };

  schema = {
    email: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      this.setState({ loading: true });
      const response = await authServices.login(
        this.state.data.email,
        this.state.data.password
      );
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
            Login Here To Place Your Order
          </h1>
          {this.state.errors.msg && (
            <div className="bg-red-200 text-red-500 p-3">
              {this.state.errors.msg}
            </div>
          )}

          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.state.loading ? (
            <FaSpinner className="animate-spin text-5xl ml-40 mt-20 text-yellow-400" />
          ) : (
            this.renderButton("Login")
          )}
        </form>
      </div>
    );
  }
}

export default login;
