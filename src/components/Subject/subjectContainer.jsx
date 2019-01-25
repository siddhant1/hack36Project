import React, { Component } from "react";
import Subject from "./subject";

class SubjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: ["PHYSICS", "CHEMISTRY", "MATHS", "ENGLISH", "BIOLOGY"]
    };
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.state.subject.map((subject,index) => {
            return <Subject subject={subject} key={index}/>;
          })}
          
        </ul>
      </div>
    );
  }
}

export default SubjectContainer;
