import React from "react";

export default class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const url = require('../../media/i.mp3')
        return (
            <div>
                    {/*<audio src="https://ex-sycdn.kuwo.cn/787c738739e82e0d0786d51f31545c34/612d8348/resource/n3/18/22/1716031718.mp3" controls="controls"/>*/}
                {/*<audio style={{width: '900px'}} src={url.default} controls='controls' />*/}
            </div>
        )
    }
}