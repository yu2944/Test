import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";

import FrontendAuth from "./FrontendAuth";
import routerMap from "./routerMap";

class Route2 extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        <FrontendAuth routerConfig={routerMap} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Route2;
