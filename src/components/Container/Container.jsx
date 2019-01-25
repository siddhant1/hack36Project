import React, { Component } from "react";
import Welcome from "../Welcome";
// import { Select } from "antd";
import Stream from '../Stream/Stream';
import Header from "../Header/Header";

class Container extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Stream/>
      </div>
    );
  }
}

export default Container;
