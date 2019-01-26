import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="sp-container">
        <div className="sp-content">
          <div className="sp-globe" />

          <h2 className="frame-2">FLASHIFY</h2>
        </div>
      </div>
    );
  }
}

export default Welcome;
