import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Books from "./components/Books";
import Loans from "./components/Loans";
import PrivateRoute from "./components/PrivateComponent";


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <PrivateRoute path="/loans" exact component={Loans} />
          <PrivateRoute path="/books" exact component={Books} />
        </Switch>
      </div>
    );
  }
}

export default App;
