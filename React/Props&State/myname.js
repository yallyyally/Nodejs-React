//새 파일에 컴포넌트 새로 만들기
import React, { Component } from 'react'

class MyName extends Component{
//모든 컴포넌트는 'render'함수가 있어야 함다

//부모가 아무 props 값도 안줬을 때 디폴트 name 값 설정

static defaultProps = {
  name: '뫄뫄'
}

render()
  { // render 함수는 JSX를 리턴해야 함
  return (
    <div>
      안녕하세요 ! 제 이름은 <b>{this.props.name}</b>에요! <br/>
      {/*이름으로 부모가 준 props의 name을 넣을 것이다*/}
    </div>
    );  
  }
}

//디폴트 props 값 설정해주는 두번째 방법
/*
MyName.defaultProps = {
  name: '뫄마'
}
*/
//class export
export default MyName;