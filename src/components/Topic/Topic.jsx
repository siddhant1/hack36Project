import React, { Component } from "react";
import './topic.css'
class Topic extends Component {
  render() {
    return (
      <>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {this.props.topic.name}
          <span class="badge badge-primary badge-pill">
            {this.props.topic.questions}
          </span>
        </li>
      </>
    );
  }
}

export default Topic;
