import React, { Component } from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import {Route} from "react-router";
import './App.css';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import ErrorPage from './pages/ErrorPage';
import QueryPage from './pages/QueryPage';

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/upload" component={UploadPage}/>
          <Route path="/query" component={QueryPage} />
          <Route component={ErrorPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
