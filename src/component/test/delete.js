import React, {Component} from 'react'

class Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputValue: ""
        }
    }

    change(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    add() {
        let {inputValue} = this.state
        if (inputValue.length === 0) {
            alert('内容不能为空')
        } else {
            this.setState({
                list: [...this.state.list, inputValue],
                inputValue: ""
            })
        }
    }

    del(index) {
        //展开数组
        let list = [...this.state.list]
        //删除元素
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.list.map((ele, index) => {
                        // 把index传入
                        return <p key={index}>{ele}
                            <button onClick={this.del.bind(this, index)}>删除</button>
                        </p>
                    })
                }
                <input style={{outline: 'none'}} type="text" value={this.state.inputValue}
                       onChange={this.change.bind(this)}/>
                <button onClick={this.add.bind(this)}>添加</button>
            </div>
        )
    }
}

export default Delete;
