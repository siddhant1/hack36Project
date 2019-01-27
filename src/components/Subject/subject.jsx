import React, { Component } from "react";
import posed from "react-pose";
import {Link} from 'react-router-dom';
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

class Subject extends Component {
  render() {
    return (
    //   <div>
        <Box className="box">
        <Link to='/topic'>
          <li className="list-group-item d-flex justify-content-between align-items-center subject-list">
            {this.props.subject}
              <span className="badge  badge-pill">
                <i className="fa fa-angle-double-right moveToNext" />
              </span>
            
          </li>
          </Link>
        </Box>
    //   </div>
    );
  }
}

export default Subject;
