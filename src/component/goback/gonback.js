import React from "react";

import './goback.scss'

export default class GonBack extends React.Component{
    render() {
        const HeadDiv={
            width:"350px",
            height:"auto",
        }
        // const A={
        //     textDecoration:'none',
        //     color:'black',
        // }
            return(
                <div style={HeadDiv} className='goBack'>
                    <a href="#" onClick={() => window.history.go(-1)}>←返回上一级</a>
                </div>
            )
    }
}
