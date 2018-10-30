import React, { Component } from 'react';
import '../css/main.css';

export default class Navbar extends React.Component {
  render() {

    return (
      <div className="navbar">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Upload Data</a></li>
              <li><a href="#">Edit Template</a></li>
              <li><a href="#">Security</a></li>
          </ul>
      </div>
    );
  }
}
