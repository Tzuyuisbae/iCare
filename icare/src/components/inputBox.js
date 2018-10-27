import React, { Component } from 'react';
import '../css/main.css';

export default class InputBox extends React.Component {
  state = {
        value: '',
};

change = e => {
  this.setState({
    value : e.target.value
  })
};

  render() {

    return (
      <input 
        className="input" 
        placeholder={this.props.placeholder}
        value = {this.state.value}
        onChange={e => this.change(e)}>
      </input>
    )
  }
}
