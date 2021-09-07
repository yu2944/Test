import React from "react";

import Audio from "../component/body/audio";
import Video from "../component/body/video";

 export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
                <Audio />
                <Video />
            </div>
        )
    }
 }