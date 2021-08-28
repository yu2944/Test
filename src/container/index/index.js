import React from "react";

import GonBack from "../../common/goback/gonback";
import Table from "../../component/table/table";
import Header from "../header";
import GetTime from "../../component/test/getdate";

export default class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    render(){
        const _Content = {
            width:'100%',
            height:'auto',
            border:'1px solid #666666',
            background:'skyblue'
        }
        const _Header = {
            width: "90%",
            height: "1100px",
            border: "1px solid #666666",
            margin:"0 auto",
            // overflow:'scroll'
        }
        const _Bottom = {
            width: "100%",
            height: "100px",
            // marginTop: "40%",
            background: "#5F9EA0",
            position: "fixed",
            left: "0",
            top: "90%",
            textAlign: "center",
            lineHeight: "100px"
        }
        return (
            <div style={_Content}>
                <Header />
                <div style={_Header} className='Header'>
                </div>
                <div style={_Bottom} className='Bottom'>
                    <GetTime />
                </div>
            </div>
        )
    }
}
