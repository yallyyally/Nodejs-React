/* 각 전화번호 정보를 보여주는 컴포넌트 */
import React, { Component } from 'react';

class Phoneinfo extends Component {
    render() {
        const {name, phone, id} = this.props.info;
        //구조 분해
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        return (
            <div style = {style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                {/*props 로 받아온 값 보여줌 */}
            </div>
        );
    }
}

export default Phoneinfo;