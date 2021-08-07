import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/cart";
import DishDetails from "./components/dishDetails";
import Home from "./components/home";
import Login from "./components/login";
import NavBar from "./components/navBar";
import SignUp from "./components/signUp";

import "./App.css";
import Footer from "./common/footer";
import Logout from "./components/logout";
import Profile from "./components/profile";
import Address from "./components/address";
import OrderSummary from "./components/orderSummary";
import Comfirmation from "./components/comfirmation";
import CreateProduct from "./components/createProduct";
import ProtectedRoute from "./components/ProtectedRoute";

// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />

      <Switch>
        <Route path="/dishes/:id" component={DishDetails} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={Logout} />
        <Route path="/comfirmation" component={Comfirmation} />
        <ProtectedRoute path="/dashboard" component={CreateProduct} />
        <Route path="/delete" component={Profile} />
        <Route path="/address" component={Address} />
        <Route path="/summary" component={OrderSummary} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
