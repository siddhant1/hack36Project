import React from 'react';
import './Header.css';
class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="jumbotron">
                    <center>
                        <h1 className='pageHeader'>Flashify</h1>
                        <div className='HeaderSubHeading'>Makes Learning Faster and Accessible...</div>
                    </center>
                </div>
            </React.Fragment>
        )
    }
}
export default Header;