import React from "react";

import Logo from "../component/header/logo";
import LoginOut from "../component/header/loginout";
import Search from "../component/header/search";

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
                        <Search />
                        <LoginOut />
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;