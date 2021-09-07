import React from "react";

import LogoImg from '../../static/logo.jpeg'


class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div style={{width:'500px',float:'left',position: 'relative'}}>
                <span className="logo">
                    <img style={{backgroundImage: `url(${LogoImg})`,backgroundSize: '100% 100%'}} alt=""/>
                </span>
                <span className="text"> 决 策 战 马 </span>
            </div>
        )
    }
}
export default Logo;