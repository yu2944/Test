import React from "react";

import BgImg from "../../static/bg.jpg"

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const url = require('../../media/gaoxiao.mp4')
        const style = {
            width: '100%',
            height: '170px',
            backgroundImage: `url(${BgImg})`,
            backgroundSize: '100% 100%',
            position: 'relative'
        }
        const text = {
            display: 'block',
            width: '220px',
            height: '30px',
            fontSize: '25px',
            fontWeight: '800',
            textAlign: 'center',
            color: 'white',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-75px',
            marginTop: '-15px'
        }
        return (
            <div style={{width: '100%', height: 'auto'}}>
                <div style={style}>
                    <span style={text}>搞 笑 视 频 专 辑</span>
                </div>
                <div style={{width: '100%', height: '600px', background: 'black'}}>
                    <video style={{display: 'block', margin: '0 auto'}} src={url.default} controls='controls'/>
                </div>

            </div>
        )
    }
}