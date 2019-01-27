import React, { Component } from "react";
import Subject from "./subject";
import posed from "react-pose";
import "./subject.css";
import ButtonGroup from "antd/lib/button/button-group";
import {Link} from 'react-router-dom';
var msg = new SpeechSynthesisUtterance();
class SubjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: ["PHYSICS", "CHEMISTRY", "MATHS", "ENGLISH", "BIOLOGY"]
    };
  }

  prepareText = () => {
    var text = "Please say one of the following options ";
    this.state.subject.forEach((s, index) => {
      text += `Option ${index + 1} for ${s.toLowerCase()} `;
    });
    return text;
  };

  componentDidMount() {
    const speak = (text = "No Voice Present") => {
      console.log(this.props);
      const msg = this.props.msg;
      msg.text = text;
      window.speechSynthesis.speak(msg);
    };
    speak(this.prepareText());
  }

  componentWillUnmount() {
    msg = null;
  }
  render() {
    return (
      <>
        {/* <Speech
          text={this.prepareText()}
          voice="Google UK English Male"
          lang="en-US"
          // stop={true}
          // pause={true}
          // resume={true}
        />
        <audio controls autoPlay src="http://localhost:9999/voice/majak" /> */}
        <div>
            <div >
              <button className='btn btn-primary '><Link to='/'><span className='styleBackBtn'>Back</span></Link></button>
            </div>
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
