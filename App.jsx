import React, { Component } from 'react';
import LoginComponent from './src/authen/LoginComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './src/demoPlayVideo/home';
import AuthenticatedRoute from './src/authen/AuthenticatedRoute';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <AuthenticatedRoute
                        path="/welcome/:name"
                        component={Home}
                    />
                </Router>
            </div>
        );
    }
}

export default App;