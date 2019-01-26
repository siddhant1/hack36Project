import React, { Component } from "react";
import Subject from "./subject";
import posed from "react-pose";
import './subject.css'
import Speech from "react-speech";
import ButtonGroup from "antd/lib/button/button-group";

class SubjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: ["PHYSICS", "CHEMISTRY", "MATHS", "ENGLISH", "BIOLOGY"]
    };
  }

  prepareText = () => {
    var text = "Please say one of the following options.";
    this.state.subject.forEach((s, index) => {
      text += `Option ${index + 1} for ${s.toLowerCase()}.`;
    });
    return text;
  };

  componentDidMount() {
    const button = document.querySelector(".rs-play");
    button.classList.add('hidden')
    setTimeout(() => {
      button.click();
    }, 1000);
  }
  render() {
    return (
      <>
        <Speech
          text={this.prepareText()}
          voice="Google UK English Male"
          lang="en-US"
          // stop={true}
          // pause={true}
          // resume={true}
        />
        <div>
          <ul className="list-group">
            {this.state.subject.map((subject, index) => {
              return <Subject subject={subject} key={index} className="box" />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default SubjectContainer;
