import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";

class App extends Component {

  state = {
    fields: {},
  };

  onChange = updatedValue => { 
    this.setState({ 
      fields: {
        ...this.state.fields,
        ...updatedValue
      } })
  }

  render() {

    return (
      <div className="App">
        <LoginForm onChange={ fields => this.onChange(fields) }/>
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default App;
