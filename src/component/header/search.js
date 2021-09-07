import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return(
            <div className='search'>
                <div className='search_btn'>
                    <input className='input' type="search" placeholder='请输入关键字'/>
                    <input className='s_btn' type="button" value='搜 索'/>
                </div>
            </div>
        )
    }
}
export default Search;