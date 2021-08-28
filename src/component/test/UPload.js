import React from "react";

const fileData = new FormData();

class UPLoad extends React.Component {
    state = {
        fileList: [],
        file: ''
    }

    onChange(e) {
        this.setState({
            file: e.target.value
        })
    }

    handleUpLoad(event) {
        const {fileList, file} = this.state;
        if (file.length === 0){
            console.log('请选择文件上传');
            alert('请选择文件上传');
        }else {
            this.setState({
                fileList: [...fileList, fileList.push(file)]  //解构数组，重新赋给数组
            })
            fileList.forEach(e => {
                fileData.append('fileList[]', e)
            })
            console.log(file);
            console.log(fileList);
            console.log(fileData.getAll('fileList[]'))
        }
    }

    handleDelete(){
        this.setState({
            fileList:'',
            file:'',
            fileData:''
        })
    }

    render() {
        let {fileList} = this.state
        return (
            <div>
                上传的文件：
                <input type="file" id='file' value={this.state.file} onChange={this.onChange.bind(this)}/>
                <button onClick={this.handleUpLoad.bind(this)}>上传</button>
                <button onClick={this.handleDelete.bind(this)}>删除文件</button>
                <p>上传的文件有：{fileData.getAll('fileList[]')}</p>
            </div>
        )
    }
}

export default UPLoad;
