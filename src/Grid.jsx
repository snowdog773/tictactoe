import React, { Component } from "react";
import Item from "./Item";

class Grid extends Component {
  state = {};
  render() {
    return (
      <>
        <ul>
          {this.props.board.map((e, index) => (
            <Item
              value={e}
              position={index}
              key={index}
              guess={this.props.guess}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Grid;
