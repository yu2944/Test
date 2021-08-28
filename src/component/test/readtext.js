import React from "react";

import Delete from "./delete";

class ReadText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleDelete(index) {
        index.preventDefault();
        let ol = document.getElementsByClassName('textList')[0];
        let li = document.getElementsByClassName('textLi');
            ol.remove();
    }

    render() {
        return (
            <div>
                <ol className='textList'>
                    <li className='textLi'>1文案本意是指放书的桌子，后来指在桌子上写字的人。现在指的是公司或企业中从事文字工作的职位，就是以文字来表现已经制定的创意策略。文案是一个与广告创意先后相继呈现的表现过程、发展过程与深化过程，
                        多存在于广告公司，企业宣传与新闻策划工作等。
                    </li>
                    <li className='textLi'>2文案本意是指放书的桌子，后来指在桌子上写字的人。现在指的是公司或企业中从事文字工作的职位，就是以文字来表现已经制定的创意策略。文案是一个与广告创意先后相继呈现的表现过程、发展过程与深化过程，
                        多存在于广告公司，企业宣传与新闻策划工作等。
                    </li>
                    <li className='textLi'>3文案本意是指放书的桌子，后来指在桌子上写字的人。现在指的是公司或企业中从事文字工作的职位，就是以文字来表现已经制定的创意策略。文案是一个与广告创意先后相继呈现的表现过程、发展过程与深化过程，
                        多存在于广告公司，企业宣传与新闻策划工作等。
                    </li>
                    <li className='textLi'>4文案本意是指放书的桌子，后来指在桌子上写字的人。现在指的是公司或企业中从事文字工作的职位，就是以文字来表现已经制定的创意策略。文案是一个与广告创意先后相继呈现的表现过程、发展过程与深化过程，
                        多存在于广告公司，企业宣传与新闻策划工作等。
                    </li>
                    <li className='textLi'>5文案本意是指放书的桌子，后来指在桌子上写字的人。现在指的是公司或企业中从事文字工作的职位，就是以文字来表现已经制定的创意策略。文案是一个与广告创意先后相继呈现的表现过程、发展过程与深化过程，
                        多存在于广告公司，企业宣传与新闻策划工作等。
                    </li>
                    <input type="button" value='清空' onClick={this.handleDelete.bind(this)}/>
                </ol>
                <Delete />
            </div>
        )
    }
}

export default ReadText;
