import React from "react";

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div style={{width:'500px',float:'left'}}>
                <span className="logo">logo</span>
                <span className="text">中 国 驰 名 商 标</span>
            </div>
        )
    }
}
export default Logo;