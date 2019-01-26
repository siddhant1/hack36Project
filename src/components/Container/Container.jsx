import React, { Component } from "react";

import Welcome from "../Welcome";
// import { Select } from "antd";
import Stream from '../Stream/Stream';
import Header from "../Header/Header";
import {Switch,Route} from 'react-router-dom';
import Content from "../Content/Content";

class Container extends Component {
  render() {
    return (
      <div>

        <Header/>
          <div className="mainContent container">
            <Switch >
                <Route path='/stream' exact component={Stream}/>
                <Route path='/content' exact component={Content}/>
            </Switch>
          </div>

      </div>
    );
  }
}

export default Container;
