import React, { Component } from 'react';
import './App.css'; //외부 스타일 시트의 App 클래스 사용 위함
class App extends Component {
  render() {
    /*
    const stylee = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: 5 + 10 + 'px'
     //fontSize: '15px' javascript 사용 ㄱㄴ
    };
    */
    return (
      //중괄호 주의!
      //<div style={stylee}> class 가 아니라 className 임에 유의
      <div className="App" /*여기도 주석 ㄱㄴ*/>
        <h1
        //여기에도 주석 ㄱㄴ
        >
          {/*
            중괄호로 묶으면 안보임!
             */}
          안녕하세요 리액트
        </h1>
      </div>
    );
  }
}

export default App;
