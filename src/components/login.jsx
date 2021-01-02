import React from "react";
import joi from "joi-browser";
import Form from "../common/form";

class login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Logged in");
  };

  render() {
    return (
      <div className="mx-40 pt-10">
        <h1 className="font-bold mb-5 text-yellow-800 text-2xl">Login Here</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default login;
