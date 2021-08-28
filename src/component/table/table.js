import React from "react";

import '../../scss/table.scss';
import Customer from '../test/UPload';
import ImageUpload from "../test/uploadimg";
import GetTime from '../test/getdate';
import ReadText from "../test/readtext";
import Header from "../../container/header";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            isDog:'',
            struct: [
                {id: Math.round(Math.random() * 10), title: '数量', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '数据', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '匹配数量', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '匹配数据', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '放出数量', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '放出数据', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '入围数量', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '匹配数量', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '匹配数据', data: Math.round(Math.random() * 100)},
                {id: Math.round(Math.random() * 10), title: '放出数量', data: Math.round(Math.random() * 100)},
            ]
        }
    }

    RandomNum() {
        const arr = [];
        const {array} = this.state;
        for (let j = 0; j < this.state.struct.length; j++) {
            if (array.length !== 10) {
                for (let i = 0; i < this.state.struct.length; i++) {
                    arr.push(Math.ceil(Math.random() * this.state.struct.length))//取1开始的整数
                }
            } else {
                console.log('已经够10个数据了，不再生成数据')
            }
        }
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            if (array.indexOf(arr[i]) === -1) {
                array.push(arr[i])
            }
        }
        //冒泡排序
        for (let j = 0; j < array.length - 1; j++) {
            for (let i = 0; i < array.length - 1 - j; i++) { // 每次排序减少一个
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                }
            }
        }
        console.log(...array)
        return array
    }

    // tick(){
    //     this.setState({
    //         isDog:false
    //     })
    //     console.log(this.state.isDog)
    // }

    // componentDidMount() {
    //     this.timer=setInterval(()=>{this.tick()},1000)
    // }

    // componentWillUnmount() {
    //     if (this.state.isDog === false){
    //         clearInterval(this.timer)
    //     }
    // }

    render() {
        return (
            <div>
                <div className='tableStyle'>
                    <h3>数据</h3>
                    {this.state.struct.map((item, index) => {
                        return (
                            <table className='dataTable' key={index}>
                                <thead>
                                <tr>
                                    <th className='_th'>{item.title}</th>
                                </tr>
                                <tr>
                                    <th className='_th'>{item.id}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className='_td'>{item.data}</td>
                                </tr>
                                </tbody>
                            </table>
                        )
                    })}
                </div>
                <button onClick={this.RandomNum.bind(this)}>点击</button>
                <Customer />
                <ImageUpload />
                <ReadText />
            </div>
        )
    }
}

export default Table;
