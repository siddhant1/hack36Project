import React, { Component } from "react";

import Welcome from "../Welcome";
import Stream from "../Stream/Stream";
import Header from "../Header/Header";
import { Switch, Route } from "react-router-dom";
import Content from "../Content/Content";
import TopicContainer from "../Topic/TopicContainer";
import SubjectContainer from "../Subject/subjectContainer";
import FlashCard from "../FlashCard/FlashCard";
import posed, { PoseGroup } from "react-pose";

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Container extends Component {
  constructor() {
    super();
    this.msg = new SpeechSynthesisUtterance();
    this.msg.volume = 100;
    this.msg.rate = 0.5;
    this.msg.voice = speechSynthesis.getVoices()[0];
    this.state = {
      isMain: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isMain: true });
    }, 4500);
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
          <div className="mainContent container">
            <Switch>
              <Route path="/" exact component={Stream} />
              <Route path="/content" exact component={Content} />
              <Route
                path="/topic"
                exact
                render={() => <TopicContainer msg={this.msg} />}
              />
              <Route
                path="/subject"
                exact
                render={() => <SubjectContainer msg={this.msg} />}
              />
              <Route path="/flashy" exact component={FlashCard} />
            </Switch>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Container;
