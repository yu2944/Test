import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";

import Login from "../login/login";
import Index from "../../container/index";



class Route1 extends React.Component{
    render() {
        return(
            <Router history={createBrowserHistory()} >
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/index" component={Index} />
                    <Redirect from='/*' to='/login'/>
                </Switch>
            </Router>
        )
    }
}
export default Route1;
