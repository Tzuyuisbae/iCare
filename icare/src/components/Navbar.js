import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import '../css/main.css';

export default class Navbar extends React.Component {
  render() {

    return (
      <div className="navbar">
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/upload">Upload</NavLink></li>
          </ul>
      </div>
    );
  }
}
