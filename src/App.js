import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/cart";
import DishDetails from "./components/dishDetails";
import Home from "./components/home";
import Login from "./components/login";
import NavBar from "./components/navBar";
import SignUp from "./components/signUp";
import { OrderProvider } from "./context";
import "./App.css";

function App() {
  return (
    <OrderProvider>
      <ToastContainer />
      <NavBar />

      <Switch>
        <Route path="/dishes/:id" component={DishDetails} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/cart" component={Cart} />
        <Route path="/" exact component={Home} />
      </Switch>
    </OrderProvider>
  );
}

export default App;
