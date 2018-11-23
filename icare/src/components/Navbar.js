import React from 'react';
import { NavLink } from "react-router-dom";

import '../css/main.css';

export default class Navbar extends React.Component {

  authenticated() {

    let home, upload, query, password, signout;
    home = <li><NavLink to="/">Home</NavLink></li>;
    upload = <li><NavLink to="/upload">Upload</NavLink></li>;
    query = <li><NavLink to="/query">Query</NavLink></li>;
    password = <li><NavLink to="/changePassword">Change password</NavLink></li>;
    signout = <li><NavLink to="/">Sign Out</NavLink></li>;
    
    if (this.props.permissions == 1) {
      return (
        <div className="navBar">
          {home}
          {upload}
          {query}
          {password}
          {signout}
        </div>
      );
    } else {
      return (
        <div className="navBar">
          {home}
          {upload}
          {password}
          {signout}
        </div>
      );
    }
  }


  render() {
    return (
      <div className="navbar">
          <ul>
              { this.authenticated() }
          </ul>
      </div>
    );
  }
}
