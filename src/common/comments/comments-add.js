import React, {Component} from 'react'
import PropTypes from'prop-types'
export default class CommentAdd extends Component {
    static propTypes={
        addComment:PropTypes.func.isRequired
    }
    state={
        user:"",
        content:""
    }
    handleSubmit =()=>{
        //获取数据
        const comment=this.state;
        //更新数据
        this.props.addComment(comment)
        //清空表单
        this.setState({
            user:"",
            content:""
        })
    }
    handleUsername=(event)=>{
        const user=event.target.value;
        this.setState({user})
    }

    handleContent=(event)=>{
        const content=event.target.value;
        this.setState({content})
    }

    render(){

        const {user,content}=this.state;
        return (<div className='col-md-4'>
                <form className='form-horizontal'>
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={user} onChange={this.handleUsername}/>
                    </div>
                    <div className="form-group">
                        <label>评价内容</label>
                        <textarea rows="6" className="form-control" placeholder="评价内容" value={content} onChange={this.handleContent}/>
                    </div>
                    <div className="form-group">
                        <div className='col-sm-offset-2 col-sm-10'>
                            <button className='btn btn-default pull-right ' onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )

    }
}