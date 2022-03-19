import React, { Component } from "react";

class Item extends Component {
  state = {};
  render() {
    return (
      <>
        <li
          onClick={
            this.props.value === 0
              ? () => this.props.guess(this.props.position)
              : () => console.log("invalid click")
          }
        >
          {this.props.value === 0 && ""}
          {this.props.value === 1 && "X"}
          {this.props.value === 2 && "O"}
        </li>
      </>
    );
  }
}

export default Item;
