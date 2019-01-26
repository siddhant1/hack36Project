import React, { Component } from "react";
import Topic from "./Topic";

class TopicContainer extends Component {
  state = {
    topics: [
      { name: "Organic Chemistry", questions: 14 },
      { name: "Inorganic Chemistry", questions: 46 },
      { name: "Physical Chemistry", questions: 74 },
      { name: "Chemistry In Everyday Life", questions: 84 },
      { name: "BioChemistry", questions: 54 }
    ]
  };

  prepareText = () => {
    var text = "Please say one of the following topics          ";
    this.state.topics.forEach((s, index) => {
      text += `Option ${index + 1} for ${s.name.toLowerCase()}`;
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

  render() {
    return (
      <>
        <ul className="list-group">
          {this.state.topics.map((topic, index) => (
            <>
              <Topic key={index} topic={topic} />
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default TopicContainer;
