import React, { Component } from 'react';
import './Stream.css';
import Dictaphone from '../VoiceRecognize/VoiceRecognize';
import { Link} from 'react-router-dom';

class Stream extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      classes: [],
      stream: [],
      selectedClass: "",
      selectedStream: "",
      isBlind : 0
    };
  }
  componentWillMount() {
    this.setState(this.initialState, () => {
      this.setState({
        classes: ["12th"],
        streams: ["Science", "Commerce", "Arts"]
      });
    });
  }
  componentDidMount() {
    console.log("RUnning");
    document.querySelector("#modal").click();
    
    // setTimeout(() => speechSynthesis.cancel, 5000);
  }
  handleChange = event => {
    event.preventDefault();
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        console.log("this.state ", this.state);
      }
    );
  };
  Blindfunction=(answer)=>{
        this.setState({
            isBlind : answer
        },()=>{
            console.log(this.state);
        })
  }
  render() {
    return (
      <div className="container streamClass">
        <div className="form" onSubmit={this.Submit}>
          <div className="row">
            <div className="col-md-8" />
            <div className="col-md-4">
              <button
                type="button "
                className="btn btn-primary hidden"
                id="modal"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Launch demo modal
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Are you Blind?
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <Dictaphone isBlind={()=>this.Blindfunction()}/>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                        name='isBlind'
                        onClick={()=>{

                            this.Blindfunction(0)
                            }}
                      >
                        No
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss='modal'
                        name='isBlind'
                        onClick={()=>{
                            
                            const ut = new SpeechSynthesisUtterance(`
                            Select Class 
                            Option 1 for 12
                             `);
                            ut.rate = 0.5;
                            console.log('HERE IN UT ')
                            speechSynthesis.speak(ut)
                            ut.onend  =  () =>{
                            const ut1 = new SpeechSynthesisUtterance(`
                            Select Stream 
                            Option 1 for Science
                            Option 2 for Maths
                             `);
                            ut1.rate = 0.5;
                            speechSynthesis.speak(ut1);
                            }
                            this.Blindfunction(1)
                            }}
                      >
                        YES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="selectClass" className="chooseClass">
              Class
            </label>
            <select
              name="selectedClass"
              defaultValue="Select Class"
              className="form-control col-md-12"
              id="selectClass"
              onChange={this.handleChange}
            >
              <option disabled={true}>Select Class</option>
              {this.state.classes &&
                this.state.classes.map((classe, index) => (
                  <option
                    value={classe}
                    key={index}
                    className="optionClass col-md-12"
                  >
                    {classe}
                  </option>
                ))}
            </select>
            <br />
            <label htmlFor="selectStream" className="chooseStream">
              Stream
            </label>
            <select
              name="selectedStream"
              defaultValue="Select Stream"
              className="form-control col-md-12 selectStream"
              id="selectStream"
              onChange={this.handleChange}
            >
              <option disabled={true}>Select Stream</option>
              {this.state.streams &&
                this.state.streams.map((stream, index) => (
                  <option value={stream} key={index} className="optionClass">
                    {stream}
                  </option>
                ))}
            </select>
            <br />
            <br />
            <center>
            <Link to='/subject'><button className='btn btn-primary'>Procced</button></Link>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Stream;
