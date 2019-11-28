import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header';
import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import MapContainer from '../MapContainer';
import ProfileForm from '../ProfileForm';

class RootRouter extends Component {
    render() {
        return (
            <Router>
                <>
                    <Header />
                    <Switch>
                        <Route path='/login' component={LoginForm}/>
                        <Redirect exact path='/' to='login'/>
                        <PrivateRoute path={`/map`} component={MapContainer}/>
                        <PrivateRoute path={`/profile`} component={ProfileForm}/>
                    </Switch>
                </>
            </Router>
        );
    }
}

export default RootRouter;