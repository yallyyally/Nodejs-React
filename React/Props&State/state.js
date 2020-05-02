import React, { Component } from 'react';
//Props 와 State - React에서 data를 다룰 때 사용, 매우 중요
/*
2. State
   props 는 부모가 자식에게 준다.->자식은 그저 읽기전용..
state는 setState 함수로 컴포넌트 값을 바꿀 수 있다. 부모가 준 값 수정 가능.
*/
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        {/*Counter 렌더링*/}
        <Counter/>
        {/*버튼을 누를때마다 값이 바뀌어야 하고, 
        이때마다 Counter coponent는 재 렌더링을 해줘야한다,
        */}
  
      </div>
    );
  }
}

export default App;
