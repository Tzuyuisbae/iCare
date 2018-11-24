import React, { Component } from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import {Route} from "react-router";
import './App.css';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import ErrorPage from './pages/ErrorPage';
import QueryPage from './pages/QueryPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import Home from './pages/Home';
import InsertAccountPage from './pages/InsertAccountPage';

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/home" component={Home} />
          <Route path="/upload" component={UploadPage}/>
          <Route path="/query" component={QueryPage} />
          <Route path="/changePassword" component={ChangePasswordPage} />
          <Route path="/insertAccount" component={InsertAccountPage} />
          <Route component={ErrorPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
