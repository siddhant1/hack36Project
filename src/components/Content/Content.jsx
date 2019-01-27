import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Content.css";


import posed from "react-pose";
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
class Content extends Component {
    constructor(){
        super();
        this.state={
            contents : [
                { title : 'Understanding Concept','description' : 'Understanding Concept will make your fundamental Strong'},
                { title : 'Take Test','description' : 'Attending Test will make your understanding more clear...'}
            ]
        }
    }
  componentDidMount() {
    const ut = new SpeechSynthesisUtterance(`
      Select one of the following
      Option 1 for Understanding Concepts
      Option 2 for Taking Test
      `);
    console.log(ut);
    ut.rate = 0.5;
    speechSynthesis.speak(ut);
  }

  render() {
    return (
            <React.Fragment>
                <div >
                <button className='btn btn-primary '><Link to='/topic'><span className='styleBackBtn'>Back</span></Link></button>
                </div>
                <ul>
                {this.state.contents.map(content=>
                    <Box className="box">
                        <Link to='/flashy'>
                            <li className="list-group-item d-flex justify-content-between align-items-center subject-list">
                                    <h5>{content.title}</h5>
                                    <br/>
                                    <div className='row'>
                                        {content.description}
                                    </div>
                                <span className="badge  badge-pill">
                                    <i className="fa fa-angle-double-right moveToNext" />
                                </span>
                            </li>
                        </Link>
                    </Box>
                )}
                </ul>
            
                </React.Fragment>
        
    );
  }
}

export default Content;
