import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import PropTypes from "prop-types";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};
const speech = {};
class Dictaphone extends Component {
  constructor(props) {
    super(props);
    ({
      resetTranscript: speech.resetTranscript,
      browserSupportsSpeechRecognition: speech.browserSupportsSpeechRecognition,
      stopListening: speech.stopListening,
      startListening: speech.startListening
    } = this.props);
  }
  componentDidMount() {
    
    console.log("start Listening ", speech.startListening);
    console.log("stop listening ", speech.stopListening);
    const ut = new SpeechSynthesisUtterance(`
      Are You Blind ?
      Option 1 for Yes
      Option 2 for No
      `);
    // console.log(ut);
    ut.rate = 0.5;
    speechSynthesis.speak(ut);
    ut.onend = ()=>{
        speech.startListening()
    }
  }
  voiceRecognizer = () => {
    console.log("voice Recognizer called");
    speech.resetTranscript();
    setTimeout(() => {
      speech.stopListening();
      console.log("band karo sunnna ");
    }, 5000);
  };
  render() {
    const { transcript } = this.props;
    if (!speech.browserSupportsSpeechRecognition) {
      return null;
    }
    return (
      <div>
        {/* <button onClick={this.voiceRecognizer}>Reset</button> */}
        <span onChange={()=>{
            var myResult = transcript.split(" ");
            var result=myResult.contains('yes');
                if(result){
                    this.props.isBlind(1);
                }
            var result1 = myResult.contains('no');
            if(result1){
                this.props.isBlind(0);
            }
        }}>{transcript}</span>
        {console.log(transcript)}
      </div>
    );
  }
}
Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
