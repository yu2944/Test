import React from "react";

import './module.scss'

class Loading extends React.Component{
    render(){
        return (
            <div className='fp-loading-spinner'>
                <div className='loading'></div>
                <p className='fp-loading-text'>加载中，请稍后</p>
            </div>
        )
    }
}
export default Loading;
