import React, { Component } from "react";
import Topic from "./Topic";
import { List } from "antd";

class TopicContainer extends Component {
  state = {
    topics: [
      { name: "Organic Chemistry", questions: 14 },
      { name: "Inorganic Chemistry", questions: 46 },
      { name: "Physical Chemistry", questions: 74 },
      { name: "Chemistry In Everyday Life", questions: 84 },
      { name: "BioChemistry", questions: 54 },
      { name: "Thermodynamics", questions: 45 }
    ]
  };
  render() {
    return (
      <ul className="list-group">
        {this.state.topics.map((topic, index) => (
          <>
            <Topic key={index} topic={topic} />
          </>
        ))}
      </ul>
    );
  }
}

export default TopicContainer;
