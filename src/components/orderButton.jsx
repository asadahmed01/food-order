import React, { Component } from "react";

class OrderButton extends Component {
  render() {
    return (
      <button
        className="bg-yellow-600 text-white 
      font-bold py-2 px-4 rounded mt-5 hover:bg-yellow-700"
        onClick={this.props.onOrder}
      >
        {this.props.type}
      </button>
    );
  }
}

export default OrderButton;
