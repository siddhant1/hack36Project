import React, { Component } from "react";

import Welcome from "../Welcome";
import Stream from "../Stream/Stream";
import Header from "../Header/Header";
import { Switch, Route } from "react-router-dom";
import Content from "../Content/Content";
import TopicContainer from "../Topic/TopicContainer";
import SubjectContainer from "../Subject/subjectContainer";
<<<<<<< HEAD
import FlashCard from "../FlashCard/FlashCard";
=======
import posed, { PoseGroup } from "react-pose";

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

>>>>>>> 304b56b65d140d3a6afe1909c0f833b259f901f2
class Container extends Component {
  constructor() {
    super();
    this.msg = new SpeechSynthesisUtterance();
    this.msg.volume = 100;
    this.msg.rate = 0.5;
    this.msg.voice = speechSynthesis.getVoices()[0];
  }
  render() {
    return (
      <div>
<<<<<<< HEAD

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

=======
        <Header />
        <div className="mainContent container">
          {/* <PoseGroup> */}
          {/* <RoutesContainer key={location.key}> */}
          <Switch>
            <Route path="/stream" exact component={Stream} />
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
          </Switch>
          {/* </RoutesContainer> */}
          {/* </PoseGroup> */}
        </div>
>>>>>>> 304b56b65d140d3a6afe1909c0f833b259f901f2
      </div>
    );
  }
}

export default Container;
