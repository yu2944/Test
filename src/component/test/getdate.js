import React from "react";

class Getdate extends React.Component{
    constructor(props) {
        super(props);
        this.state={date:new Date()}
    }

    componentDidMount() {
        const timer=setInterval(()=>this.tick(),1000)
    }

    // handleTime(){
    //     let date = new Date();
    //     let str1 = '/';
    //     let str2 = ':';
    //     let mouth = date.getMonth();
    //     let strData = date.getDate();
    //     let strSeconds = date.getSeconds();
    //     let strMinutes = date.getMinutes()
    //     if (mouth>0 && mouth<=9){
    //         mouth='0'+mouth
    //     }
    //     if (strData>=0 && strData<=9){
    //         strData='0'+strData
    //     }
    //     if (strSeconds>=0 && strSeconds<=9){
    //         strSeconds='0'+strSeconds
    //     }
    //     if (strMinutes>=0 && strMinutes<=9){
    //         strMinutes='0'+strMinutes
    //     }
    //     let newData= date.getFullYear()+str1+mouth+str1+strData+' '+'\n'+date.getHours()+str2+strMinutes+str2+strSeconds;
    //     console.log(newData)
    //     return newData;
    // }

    tick(){
        this.setState({
            date:new Date()
        })
        // console.log(this.state.date.toLocaleTimeString())
    }

    render() {
        return (
            <div style={{fontSize:'20px',fontWeight:'700'}}>
                当前时间为：
                <span style={{}}>{this.state.date.toLocaleTimeString()}</span>
            </div>
        )
    }
}

export default Getdate;
