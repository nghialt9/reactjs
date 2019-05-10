import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import Home from "../demoPlayVideo/home";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      //Adding Validation Message
      hasLoginFailed: false,
      showSuccessMessage: false
    };

    //Binding
    this.handleValueChange = this.handleValueChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleValueChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginClicked() {
    AuthenticationService.login().then((result) => {
      result.data.every(element => {
        if (element["username"] === this.state.username &&
        element["password"] === this.state.password) {
          //Set Token into SessionStorage
          AuthenticationService.registerSuccessfulLogin(
            this.state.username,
            this.state.password
          );
          this.setState({
            showSuccessMessage: true,
            hasLoginFailed: false
          });
          <Home />
          return;
        } else {
          console.log("Failed");
          this.setState({
            showSuccessMessage: false,
            hasLoginFailed: true
          });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {/*boolean && String | false returns false, true returns String*/}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Successful Login</div>}
          User Name:{" "}
          <input
            type="text"
            name="username"
            onChange={this.handleValueChange}
            value={this.state.username}
          />
          Password:{" "}
          <input
            type="password"
            name="password"
            onChange={this.handleValueChange}
            value={this.state.password}
          />
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div >
    );
  }
}

export default LoginComponent;
