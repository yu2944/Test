import React, {Component} from 'react'
import '../comments-item/item.css'
import CommentItem from './comments-item'
import PropTypes from 'prop-types'
export default class CommentList extends Component {
    static propTypes={
        comments: PropTypes.array.isRequired
    }
    render() {
        const {comments}=this.props;
        return (<div className='col-md-8'>
                <h3 className=''>评论回复:</h3>
                <h2 style={{display:'none'}}>暂无评论，点击左侧添加评论</h2>
                <ul>
                    {
                        comments.map(
                            (comment, index) =>
                                <CommentItem comment={comment} key={index}/>)

                    }
                </ul>
            </div>
        )

    }
}