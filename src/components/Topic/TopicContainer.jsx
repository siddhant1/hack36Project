import React, { Component } from "react";
import Topic from "./Topic";
import {Link} from 'react-router-dom';

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
    const ut = new SpeechSynthesisUtterance(this.prepareText());
    console.log(ut);
    ut.rate = 0.5;
    speechSynthesis.speak(ut);
  }

  render() {
    return (
      <>
        <div >
            <button className='btn btn-primary '><Link to='/subject'><span className='styleBackBtn'>Back</span></Link></button>
        </div>
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
