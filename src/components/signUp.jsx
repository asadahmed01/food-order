import React from "react";
import joi from "joi-browser";
import Form from "../common/form";

class SignUp extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: joi.string().required().email().label("Username"),
    password: joi.string().required().min(5).label("Password"),
    name: joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Registered");
  };

  render() {
    return (
      <div className="pt-10 ml-20">
        <h1 className="font-bold mb-5 text-yellow-800 text-2xl">
          Register Here
        </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Email")}
          {this.renderInput("name", "Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default SignUp;
