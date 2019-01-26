import React, { Component } from 'react';
import './Stream.css';
import Dictaphone from '../VoiceRecognize/VoiceRecognize';

class Stream extends Component {
    constructor(props){
        super(props);
        this.initialState={
            classes: [],
            stream : [],
            selectedClass :'',
            selectedStream : ''
        }
    }
    componentWillMount(){
        this.setState(this.initialState,()=>{
            this.setState({
                classes : ['12th'],
                streams : ['Science','Commerce','Arts']
            })
        });
    }
    componentDidMount(){
        document.querySelector('#modal').click();
    }
    handleChange=(event)=>{
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        },()=>{
            console.log('this.state ',this.state);
        })
    }
    render() {
        return (
            <div className='container streamClass'>
                <div className="form" onSubmit={this.Submit}>
                    <div className="row">
                        <div className="col-md-8"></div>
                        <div className="col-md-4">
                        <button type="button" className="btn btn-primary hide" id='modal' data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Dictaphone/>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" class="btn btn-primary" data-dismiss>YES</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="selectClass" className='chooseClass'><strong>Class</strong></label>
                        <select name="selectedClass" defaultValue='Select Class' className='form-control col-md-12' id="selectClass" onChange={this.handleChange}>
                            <option disabled={true}>Select Class</option> 
                            { this.state.classes && this.state.classes.map((classe,index)=>
                                    <option value={classe} key={index} className='optionClass col-md-12'>{classe}</option>
                                )}
                        </select>
                        <br/>
                        <label htmlFor="selectStream" className='chooseStream'><strong>Stream</strong></label>
                        <select name="selectedStream" defaultValue='Select Stream' className='form-control col-md-12' id="selectStream" onChange={this.handleChange}>
                            <option  disabled={true}>Select Stream</option> 
                                { this.state.streams && this.state.streams.map((stream,index)=>
                                        <option value={stream} key={index} className='optionClass'>{stream}</option>
                                )}
                        </select>
                        <br/>
                        <br/>
                        <center><button className='btn btn-primary'>Procced</button></center>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Stream;
