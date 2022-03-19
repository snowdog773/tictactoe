import React, { Component } from "react";
import Grid from "./Grid";
import "./App.css";

class App extends Component {
  state = { board: [0, 0, 0, 0, 0, 0, 0, 0, 0], turn: 1 };

  guess = (position) => {
    const newBoard = [...this.state.board];
    newBoard[position] = this.state.turn;
    if (this.state.turn === 1) {
      this.setState({ board: newBoard, turn: 2 });
    } else {
      this.setState({ board: newBoard, turn: 1 });
    }
  };
  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <h2>Player {this.state.turn}'s Turn</h2>
        <Grid board={this.state.board} guess={this.guess} />
      </>
    );
  }
}

export default App;
