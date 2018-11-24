import React from 'react';
import { NavLink } from "react-router-dom";

import '../css/main.css';

export default class Navbar extends React.Component {

  authenticated() {

    let home, upload, query, password, signout;
    home = <NavLink className="navItem" to="/">Home</NavLink>;
    upload = <NavLink className="navItem" to="/upload">Upload</NavLink>;
    query = <NavLink className="navItem" to="/query">Query</NavLink>;
    password = <NavLink className="navItem" to="/changePassword">Change password</NavLink>;
    signout = <NavLink className="navItem" to="/">Sign Out</NavLink>;
    
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
