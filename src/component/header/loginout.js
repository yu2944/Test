import React from "react";

class LoginOut extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isHover: false
        }
    }

    handleEnter(){
        this.setState({
            isHover: !this.state.isHover
        })
    }

    handleOut(){
        this.setState({
            isHover: false
        })
    }

    handleDel(e){
        e.preventDefault();
        let {username,password} = this.props
        // sessionStorage.clear();  //清除登陆信息，刷新会退出页面
        // sessionStorage.removeItem("username");  //刷新会退出页面
        window.sessionStorage.removeItem('username');
        return alert('清除成功');
    }

    render() {
        let style = {}
        let {isHover} = this.state
        if (isHover){
            style = {
                color: '#0000FF',
                textDecoration: 'underline',
                cursor: 'pointer'
            }
        }else {
            style = {
                color: 'black'
            }
        }
        return (
            <div>
                <div style={{width:'250px',height:'150px',display:'flex',justifyContent:'space-around',marginLeft:'78%'}}>
                    <span className='_span'>欢迎用户：{window.sessionStorage.getItem('username')}</span>
                    <a className='_a' style={ style } onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleOut.bind(this)} onClick={this.handleDel.bind(this)}>登出</a>
                </div>
            </div>
        )
    }
}
export default LoginOut;