import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import "./Content.css";

import posed from "react-pose";
const Box = posed.div({
  hoverable: true,
  //   pressable: true,
  init: {
    scale: 0.8,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 0.85,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});
class Content extends Component {
  componentDidMount() {
    const ut = new SpeechSynthesisUtterance(`
      Select one of the following
      Option 1 for Understanding Concepts
      Option 2 for Taking Test
      `);
    console.log(ut);
    ut.rate = 0.5;
    speechSynthesis.speak(ut);
  }

  render() {
    return (
      <React.Fragment>
        <Box className="box">
          <div class="card">
            <div class="card-body row">
              <div className="col-md-11">
                <h5 class="card-title">Understanding Concept</h5>
                <p class="card-text">
                  {" "}
                  Understanding Concept will make your fundamental Strong
                </p>
              </div>
              <div className="col-md-1 contentArrow">
                <i className="fa fa-angle-double-right" />
              </div>
            </div>
          </div>
        </Box>
        <Box>
          <div class="card">
            <div class="card-body row">
              <div className="col-md-11">
                <h5 class="card-title">Take Test</h5>
                <p class="card-text">
                  Attending Test will make your understanding more clear...
                </p>
              </div>
              <div className="col-md-1 contentArrow">
                <i className="fa fa-angle-double-right " />
              </div>
            </div>
          </div>
        </Box>
        <Box>
          <div class="card">
            <div class="card-body row">
              <div className="col-md-11">
                <h5 class="card-title">Nacho</h5>
                <p class="card-text">Nacho nacho</p>
              </div>
              <div className="col-md-1 contentArrow">
                <i className="fa fa-angle-double-right" />
              </div>
            </div>
          </div>
        </Box>
      </React.Fragment>
    );
  }
}

export default Content;
