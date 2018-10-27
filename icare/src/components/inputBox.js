import React, { Component } from 'react';
import '../css/main.css';

class inputBox extends React.Component {
  constructor() {
    super();
    this.state = {
        value: '',
    };
};

change = e => {
  this.setState({
    value : e.target.value
  })
}

  render() {

    return (
      <form>
        <input 
          className="input" 
          placeholder="username"
          value = {this.state.value}
          onChange={e => this.change(e)}>
        </input>
      </form>
    );
  }
}

export default inputBox;
