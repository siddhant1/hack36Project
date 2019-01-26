import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './Content.css';
class Content extends Component {    
    render() {
        return (
            <React.Fragment>
                <div class="card">
                    <div class="card-body row">
                        <div className="col-md-11">
                            <h5 class="card-title">Understanding Concept</h5>
                            <p class="card-text"> Understanding Concept will make your fundamental Strong</p>
                        </div>
                        <div className="col-md-1 contentArrow">
                            <i className='fa fa-angle-double-right'></i>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body row">
                        <div className="col-md-11">
                            <h5 class="card-title">Take Test</h5>
                            <p class="card-text">Attending Test will make your understanding more clear...</p>
                        </div>
                        <div className="col-md-1 contentArrow">
                            <i className='fa fa-angle-double-right '></i>
                        </div>                        
                    </div>
                </div>
                <div class="card">
                    <div class="card-body row">
                        <div className="col-md-11">
                            <h5 class="card-title">Nacho</h5>
                            <p class="card-text">Nacho nacho</p>
                        </div>
                        <div className="col-md-1 contentArrow">
                            <i className='fa fa-angle-double-right'></i>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Content;