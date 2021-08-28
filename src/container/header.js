import React from "react";

import Logo from "../component/header/logo";
import LoginOut from "../component/header/loginout";

import '../scss/header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
                <header>
                    <div>
                        <Logo />
                        <LoginOut />
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;