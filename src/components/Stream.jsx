import React, { Component } from 'react';

class Stream extends Component {
    render() {
        return (
            <div>
               <label htmlFor="">Enter your class </label>
               <select>
                   <option>CLASS 11</option>
                   <option>CLASS 12</option>
               </select>
            </div>
        );
    }
}

export default Stream;
