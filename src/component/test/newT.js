import React from "react";

export default class NewT extends React.Component{
    constructor(props) {
        super(props);
        this.state={name:''}
    }

    handleOnChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleTryCatch(){
        let {name}=this.state
        try {
            console.log(name)
        }catch (error){
            console.log(error)
        }
    }

    handleClick(){
        let a =["2017-09-18T22:37:58.95", "2017-08-18T22:37:58.96", "2017-10-18T22:37:58.95", "2017-08-18T22:37:58.95"]
            a.sort();
        // a=a.reverse(); //反转排序
        console.log(...a)
        return a;
    }

    render() {
        const {name}=this.state
        return (
            <div>
                <input type="text" name='name' value={name} onChange={this.handleOnChange.bind(this)}/>
                <input type="button" value='确认' onClick={this.handleTryCatch.bind(this)}/>
                <input type="button" value='点击' onClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}
