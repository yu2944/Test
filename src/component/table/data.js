import React from "react";

let data = [
    {name: "Bruce", age: 23, id: 16, score: 80},
    {name: "Alice", age: 24, id: 12, score: 90},
    {name: "David", age: 21, id: 11, score: 70},
    {name: "Cindy", age: 22, id: 10, score: 100},
];
let flag = {
    name: true,
    age: true,
    id: true,
    score: true
};

function upSort(propertyName) {
    if ((typeof data[0][propertyName]) != "number") {
        return function (object1, object2) {
            let value1 = object1[propertyName];
            let value2 = object2[propertyName];
            return value1.localeCompare(value2);
        }
    } else {
        return function (object1, object2) {
            let value1 = object1[propertyName];
            let value2 = object2[propertyName];
            return value1 - value2;
        }
    }
}

function downSort(propertyName) {
    if ((typeof data[0][propertyName]) != "number") {
        return function (object1, object2) {
            let value1 = object1[propertyName];
            let value2 = object2[propertyName];
            return value2.localeCompare(value1);
        }
    } else {
        return function (object1, object2) {
            let value1 = object1[propertyName];
            let value2 = object2[propertyName];
            return value2 - value1;
        }
    }
}

let TableBox = React.createClass({
    getInitialState: function () {
        return {data: this.props.data};
    },
    sort: function (e) {
        let prop = e.target.innerHTML;
        if (flag[prop] === true)
            this.state.data.sort(upSort(prop));
        else
            this.state.data.sort(downSort(prop));
        flag[prop] = !flag[prop];
        this.setState({data: this.state.data});
    },
    render: function () {
        return (
            <table>
                <thead>
                <tr>
                    <th onClick={this.sort}>name</th>
                    <th onClick={this.sort}>age</th>
                    <th onClick={this.sort}>id</th>
                    <th onClick={this.sort}>score</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.data.map(function (item, index) {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.id}</td>
                                <td>{item.score}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
})

export default TableBox;
