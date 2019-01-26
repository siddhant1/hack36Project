import React, { Component } from "react";

import Welcome from "../Welcome";
// import { Select } from "antd";
import Stream from '../Stream/Stream';
import Header from "../Header/Header";
import {Switch,Route} from 'react-router-dom';
import Content from "../Content/Content";
import TopicContainer from '../Topic/TopicContainer';
import Subject from '../Subject/subjectContainer';
import SubjectContainer from "../Subject/subjectContainer";
import FlashCard from "../FlashCard/FlashCard";
class Container extends Component {
  render() {
    return (
      <div>

        <Header/>
          <div className="mainContent container">
            <Switch >
                <Route path='/stream' exact component={Stream}/>
                <Route path='/content' exact component={Content}/>
                <Route path='/topic' exact component={TopicContainer}/>
                <Route path='/subject' exact component={SubjectContainer}/>
                <Route path='/flashy' exact component={FlashCard}/>
            </Switch>
          </div>

      </div>
    );
  }
}

export default Container;
