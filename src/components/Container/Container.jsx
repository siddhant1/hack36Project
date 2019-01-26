import React, { Component } from "react";

import Welcome from "../Welcome";
import Stream from '../Stream/Stream';
import Header from "../Header/Header";
import {Switch,Route} from 'react-router-dom';
import Content from "../Content/Content";
import TopicContainer from '../Topic/TopicContainer';
import SubjectContainer from "../Subject/subjectContainer";
class Container extends Component {
  render() {
    return (
      <div>

        <Header/>
          <div className="mainContent container">
            <Switch >
                <Route path='/welcome' exact component={Welcome}/>
                <Route path='/stream' exact component={Stream}/>
                <Route path='/content' exact component={Content}/>
                <Route path='/topic' exact component={TopicContainer}/>
                <Route path='/subject' exact component={SubjectContainer}/>
            </Switch>
          </div>

      </div>
    );
  }
}

export default Container;
