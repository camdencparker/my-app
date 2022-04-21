// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import ReactDOM from "react-dom";
// eslint-disable-next-line
import "./index.css";

class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
