import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Map from "./map/Map";
import Profile from "./profile/Profile";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <nav>
                        <Link to="/map">Карта</Link>
                        <Link to="/profile">Профиль</Link>
                        <Link to="/login">Логин</Link>
                        <Link to="/signup">Вход</Link>
                    </nav>
                    <Route exact path="/map" component={Map}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                </Router>
            </div>
        );
    }
}
