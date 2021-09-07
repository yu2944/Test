import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

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
