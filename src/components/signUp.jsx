import React from "react";
import joi from "joi-browser";
import Form from "../common/form";
import * as userServices from "./services/userService";
import { FaSpinner } from "react-icons/fa";

class SignUp extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
    loading: false,
  };

  schema = {
    email: joi.string().required().email().label("Email"),
    password: joi.string().required().min(5).label("Password"),
    name: joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      this.setState({ loading: true });
      const response = await userServices.register(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location = "/login";
      this.setState({ loading: false });
    } catch (ex) {
      if (ex.response && ex.response.status == 400) {
        let errors = { ...this.state.errors };
        errors = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="mt-20 pt-10 min-h-screen flex self-center justify-center">
        <form onSubmit={this.handleSubmit}>
          <h1 className="font-bold mb-5 text-yellow-800 text-2xl">
            Register Here
          </h1>
          {this.renderInput("email", "Email")}
          {this.renderInput("name", "Name")}
          {this.renderInput("password", "Password", "password")}
          {this.state.errors.msg}
          {this.state.loading ? (
            <FaSpinner className="animate-spin text-5xl ml-40 mt-20 text-yellow-400" />
          ) : (
            this.renderButton("Register")
          )}
        </form>
      </div>
    );
  }
}

export default SignUp;
