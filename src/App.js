import React, { Component } from "react";
import Container from "./components/Container/Container";
import './App.css'
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div >
      <Welcome/>
      </div>
    );
  }
}

export default App;
