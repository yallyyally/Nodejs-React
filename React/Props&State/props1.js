import React, { Component } from 'react';
//Props 와 State - React에서 data를 다룰 때 사용, 매우 중요
/*
1. Props
   부모 Component 가 자식 Component에게 값 전달시 사용
   <Child value = "value"/>  value 가 하나의 props

*/
import MyName from './myname';
//다른 파일의 자식 컴포넌트 상속 클래스 불러들여옴
class App extends Component {
  render() {
    return (
      <div>
        {/*MyName 렌더링*/}
        <MyName name="준희" />
        {/*안녕하세요! 제이름은 준희에요!*/}
        <MyName />
        {/*
          디폴트 설정 안했을 때 - 안녕하세요! 제이름은 에요!
         디폴트 설정 했을 때 - 안녕하세요! 제 이름은 뫄뫄에요!
          */}
      </div>
    );
  }
}

export default App;
