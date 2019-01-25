import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {this.props.subject}
          <span className="badge  badge-pill"><i className="fas fa-angle-double-right"></i></span>
        </li>
      </div>
    );
  }
}

export default Subject;
