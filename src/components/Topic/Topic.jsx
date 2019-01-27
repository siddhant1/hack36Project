import React, { Component } from "react";
import posed from 'react-pose';
import './topic.css';
import {Link} from 'react-router-dom';

const Box=posed.div({
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

})




class Topic extends Component {



  render() {
    return (
      <React.Fragment>
      <Box className='box'>
        <Link to='/content'><li className="list-group-item d-flex justify-content-between align-items-center">
          {this.props.topic.name}
          <span className="badge badge-primary badge-pill">
            {this.props.topic.questions}
          </span>
        </li>
        </Link>
        </Box>
        </React.Fragment>
    );
  }
}

export default Topic;
