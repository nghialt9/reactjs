import React, { Component } from 'react';
import ForceUpdate from '../API/forceUpdate';
import FindDOMNode from '../API/findDOMNode';
import LifeCycle from '../API/lifeCycle';
import ApiAjax from '../API/apiAjax';
import PropState from '../Props/PropState';
import ValidateProp from '../Props/ValidateProps';
import SetState from '../API/setState';
import AuthenticationService from '../authen/AuthenticationService';
import { BrowserRouter as Router, Route, Switch, Link, browserHistory, IndexRoute } from "react-router-dom";
import LoginComponent from '../authen/LoginComponent';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        this.setState({ data: 'Data updated from the child component...' })
    }
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <div>
                <Router history={browserHistory}>
                    <ul>
                        {!isUserLoggedIn && (
                            <li>
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                        {isUserLoggedIn && (
                            <li>
                                <Link
                                    className="nav-link"
                                    to="/login"
                                    onClick={AuthenticationService.logout}
                                >
                                    Logout
                                </Link>
                            </li>
                        )}
                        <li><Link className="nav-link" to="/PropState">PropState</Link></li>
                        <li><Link className="nav-link" to="/ValidateProp">ValidateProp</Link></li>
                        <li><Link className="nav-link" to="/SetState">SetState</Link></li>
                    </ul>
                    {this.props.children}
                    <ForceUpdate />
                    <FindDOMNode />
                    <LifeCycle myDataProp={this.state.data}
                        updateStateProp={this.updateState} />
                    <ApiAjax />
                    <Switch>
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/PropState" component={PropState} />
                        <Route path="/ValidateProp" component={ValidateProp} />
                        <Route path="/SetState" component={SetState} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Home;