import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

class TopNav extends React.Component {
  render() {
    return (
        <div id="navbar">
            <div id="navbar-right">
                <div id="login">
                    <a href="login.html">ورود</a>
                </div>
                <div id="register">
  		            <a href="register.html">عضویت</a>
  	            </div>
                <div id="help">
  		            <a href="#">راهنما</a>
  	            </div>
   
            </div>
        </div>
    );
   
}
}
export default TopNav;
