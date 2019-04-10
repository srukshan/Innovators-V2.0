import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Body from "./components/body";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Body />
      </main>
    );
  }
}

export default App;
