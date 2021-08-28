import React from "react";

class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div style={{ width: '300px', height: '100px', margin: '300px auto', textAlign: 'center' }}>
                <p style={{ width: '300px', height: '50px', fontSize: '40px', fontWeight: '900' }}>404</p>
                <p style={{ width: '300px', height: '50px', fontSize: '25px' }}>抱歉，找不到该网页</p>
            </div>
        )
    }
}
export default Error;