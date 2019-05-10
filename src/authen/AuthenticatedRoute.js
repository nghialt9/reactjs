import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Route, Redirect } from "react-router-dom";
import Home from "../demoPlayVideo/home";
import LoginComponent from "./LoginComponent";

class AuthenticatedRoute extends Component {
  render() {
    if (AuthenticationService.isUserLoggedIn()) {
      // return <Route {...this.props} />;
      return <Home />
    } else {
      // return <Redirect to="/login" />;
      return <LoginComponent />
    }
  }
}

export default AuthenticatedRoute;