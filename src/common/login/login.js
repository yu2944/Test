import React from "react";
import {Message, Card} from 'element-react';
import ParticlesBg from 'particles-bg'
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

import GonBack from "../goback/gonback";
// import {message} from "antd";

// import {message} from "antd";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorName: '',
            errorPassword: ''
        }
        this.refName = React.createRef();
    }

    // onBlurName(event){
    //     this.username=event.target.value
    //     let reg=/^[0-9]*$/;
    //     if (reg.test(this.username)===false){
    //         this.setState({
    //             username:"请输入正确的格式~"
    //         })
    //     }else {
    //         this.setState({
    //             username:''
    //         })
    //     }
    // }
    //
    // onBlurPassword(event){
    //     this.password=event.target.value
    //     let reg=/^[0-9]*$/;
    //     if (reg.test(this.password)===false){
    //         this.setState({
    //             password:"请输入正确的密码~"
    //         })
    //     }else {
    //         this.setState({
    //             password:''
    //         })
    //     }
    // }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onClickLogin() {
        // let username = this.refName.current.value
        // alert(username)
    }

    LoginClick = (e) => {
        console.log(e)
        let history = this.props.history
        let {username, password} = this.state
        e.preventDefault();       //阻止事件提交
        if (username === 'admin' && password === '123456') {
            console.log('登录成功~~')
            history.push('/index')
        } else if (username.trim() === '' && password.trim() === '') {
            this.setState({
                errorName: '账户不能为空',
                errorPassword: '密码不能为空'
            })
            console.log('登录失败')
        } else if (username.trim() === '') {
            this.setState({
                errorName: '账户不能为空',
            })
            console.log('登录失败')
        } else if (password.trim() === '') {
            this.setState({
                errorPassword: '密码不能为空'
            })
            console.log('登录失败')
        } else if (username !== 'admin') {
            this.setState({
                errorName: '请输入正确的账户',
            })
            console.log('登录失败')
        } else if (password !== '123456') {
            this.setState({
                errorPassword: '密码与账户要一致'
            })
            console.log('登录失败')
        } else {
            this.setState({
                errorPassword: '',
                errorName: ''
            })
            console.log('登录失败')
        }
    }

    handleReset() {
        this.setState({
            username: '',
            password: '',
            errorName: '',
            errorPassword: ''
        })
    }

    render() {
        const userInput = {
            height: "30px",
            outline: "none",
            paddingLeft: "10px",
            borderRadius: '10px',
            border: "none"
        }
        const passwordInput = {
            height: "30px",
            outline: "none",
            paddingLeft: "10px",
            borderRadius: '10px',
            border: "none"
        }
        const UL = {
            width: "350px",
            height: "280px",
            listStyle: "none",
            margin: "250px auto",
            background: "#B0C4DE",
            border: "1px solid white",
            color: "#2F4F4F",
        }
        const Li = {
            width: "230px",
            margin: "20px auto",
            textAlign: "left",
        }

        return (
            <div>
                <form onSubmit={this.LoginClick.bind(this)} style={UL}>
                    <ParticlesBg num={200} type="circle" bg={true}/>
                    <h3 style={{width: "350px", textAlign: "center", marginTop: "40px"}}>欢迎登录</h3>
                    <li style={Li}>
                        <label style={{fontWeight: "600"}}>
                            账号：
                            <input ref={this.refName} value={this.state.username} name='username' type="text"
                                   placeholder='请输入账号'
                                   style={userInput}
                                   onChange={this.onChange.bind(this)} required/>
                            <span style={{
                                display: "block",
                                color: 'red',
                                fontSize: '14px',
                                marginLeft: '50px'
                            }}>{this.state.errorName}</span>
                        </label>
                    </li>
                    <li style={Li}>
                        <label style={{fontWeight: "600"}}>
                            密码：
                            <input value={this.state.password} name='password' type="password" placeholder='请输入密码'
                                   style={passwordInput}
                                   onChange={this.onChange.bind(this)}/>
                            <span style={{
                                display: "block",
                                color: 'red',
                                fontSize: '14px',
                                marginLeft: '50px'
                            }}>{this.state.errorPassword}</span>
                        </label>
                    </li>
                    <li style={{textAlign: 'center'}}>
                        <input type="submit" value='登录' onClick={this.LoginClick.bind(this)}/>
                        <input type="reset" value='重置' disabled={!this.state.username && !this.state.password}
                               onClick={this.handleReset.bind(this)}/>
                    </li>
                </form>
            </div>
        )
    }
}

export default Login;
