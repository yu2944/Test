import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Route2 from "../../common/router/router-2";

class LoginOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: false,
            isHover: false,
            show: false
        }
    }

    handleEnter() {
        this.setState({
            isHover: !this.state.isHover
        })
    }

    handleOut() {
        this.setState({
            isHover: false
        })
    }

    handleDel(e) {
        console.log(e);
        e.preventDefault();
        let a = document.getElementsByClassName('_a')[0];
        // sessionStorage.clear();  //清除登陆信息，刷新会退出页面
        // sessionStorage.removeItem("username");  //刷新会退出页面
        window.sessionStorage.removeItem('username');  //清除登陆用户名，刷新退出页面
        this.setState({
            info: !this.state.info
        })
        if (!this.state.info) {
            a.style.display = "none";
        }
    }

    handleLogin() {
        window.location.href="/login";
    }

    render() {
        let style = {};
        let {isHover} = this.state;
        let getItem = window.sessionStorage.getItem('username')
        if (isHover) {
            style = {
                color: '#0000FF',
                textDecoration: 'underline',
                cursor: 'pointer',
            }
        } else {
            style = {
                color: 'black'
            }
        }
        return (
            <div>
                <div style={{
                    width: '250px',
                    height: '20px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginLeft: '81%'
                }}>
                    <span className='_span'>{this.state.info ?
                        <a onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleOut.bind(this)}
                              style={style} onClick={this.handleLogin.bind(this)}>登陆</a> : '欢迎用户：' + getItem }</span>
                    <a className='_a' style={style} onMouseEnter={this.handleEnter.bind(this)}
                       onMouseLeave={this.handleOut.bind(this)} onClick={this.handleDel.bind(this)}>登出</a>
                </div>
            </div>
        )
    }
}

export default LoginOut;