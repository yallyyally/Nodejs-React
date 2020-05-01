import React, { Component } from 'react';
//'react' 모듈이 있는데 이걸 불러와서 사용하겠다~
//항상 React 해줘야 함
class App extends Component {
    //컴포넌트를 만드는 법 -1. 클래스 이용 (함수 이용)
  render() {
      //render 메소드 - jsx 형태의 코드를 return 해줘야함!
    return (
      <div>
        <h1>안녕하세요 리액트</h1>
        <input type = "text"/>
      </div>
    );
  }
}

export default App;
