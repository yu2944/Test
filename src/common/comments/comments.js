import React, {Component} from 'react'
import CommentAdd from './comments-add'
import CommentList from './comments-list'
export default class Comment extends Component {
    state={
        comments:[
            {user:'tom',content:'还不错'},
            {user:'terry',content:'很好'},

        ]
    }
    addComment=(comment)=>{
        const {comments}=this.state;
        if(!comment){
            return
        }
        comments.unshift(comment)
        this.setState({comments})
    }


    render() {
        const {comments}=this.state;
        return (<div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="col-xs-12"><h1>请发表对React的评论</h1></div>
                    </div>
                </header>
                <div className='container'>
                    <div className='row'>
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList  comments={comments}/>
                    </div>
                </div>
            </div>
        )
    }
}