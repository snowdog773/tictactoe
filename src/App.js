import React, { Component } from "react";
import Grid from "./Grid";
import "./App.css";

class App extends Component {
  state = { board: [0, 0, 0, 0, 0, 0, 0, 0, 0], turn: 1, win: false };

  guess = (position) => {
    const newBoard = [...this.state.board];
    newBoard[position] = this.state.turn;
    // check for a win
    const [a, b, c, d, e, f, g, h, i] = newBoard;
    const token = [this.state.turn, this.state.turn, this.state.turn];
    JSON.stringify([a, b, c]) === JSON.stringify(token) ||
    JSON.stringify([d, e, f]) === JSON.stringify(token) ||
    JSON.stringify([g, h, i]) === JSON.stringify(token) ||
    JSON.stringify([a, d, g]) === JSON.stringify(token) ||
    JSON.stringify([b, e, h]) === JSON.stringify(token) ||
    JSON.stringify([c, f, i]) === JSON.stringify(token) ||
    JSON.stringify([a, e, i]) === JSON.stringify(token) ||
    JSON.stringify([c, e, g]) === JSON.stringify(token)
      ? this.setState({ win: true, board: newBoard })
      : this.state.turn === 1
      ? this.setState({ board: newBoard, turn: 2 })
      : this.setState({ board: newBoard, turn: 1 });
  };
  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <>
          {this.state.win === true ? (
            <h2> Player {this.state.turn} Wins!</h2>
          ) : (
            <h2> Player {this.state.turn}'s Turn</h2>
          )}
        </>
        <Grid board={this.state.board} guess={this.guess} />
      </>
    );
  }
}

export default App;
