import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import NavBar from "./navBar";

class Cart extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>
          {this.props.items}
          <FaShoppingCart />
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
