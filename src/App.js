import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

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
import Footer from "./common/footer";
import Logout from "./components/logout";
import Profile from "./components/profile";
import Address from "./components/address";
import OrderSummary from "./components/orderSummary";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />

        <Switch>
          <Route path="/dishes/:id" component={DishDetails} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/logout" component={Logout} />
          <Route path="/delete" component={Profile} />
          <Route path="/address" component={Address} />
          <Route path="/summary" component={OrderSummary} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
