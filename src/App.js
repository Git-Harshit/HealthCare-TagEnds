import React from "react";
// const React = require("react");
import { Component } from 'react';
import { render } from "@testing-library/react";
import fire from './congif';
import Home from './Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
    this.authListener = this.authListener.bind(this);
    
  }
    
  
  componentDidMount() {
    this.authListener();
  }

   authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // localStorage.setItem('user', user.uid);
      }
      else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <Router>
        <div> 
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </div>
      </Router> 
 
    );
  }
}


export default App;