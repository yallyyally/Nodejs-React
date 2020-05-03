import React, { Component } from 'react';
import MyComponent from './MyComponent';
/*
 LifeCycle API
 컴포넌트가 우리 눈에..
 1.나타날 때 (Mounting)
   constructor: 생성자 함수. state 초기 설정 및 사전 작업
   getDerivedStateFromProps: props 로 받은 값을 state로 사용 (리턴값 바로 사용)
   render - 내부 태그 및 DOM 에 전달할 값 정의
   componentDidMount - 외부 라이브러리 사용시 특정 DOM 에 차트 그려달라거나 API 네트워크 요청시,,
   컴포넌트가 나타난 '시점'에 무언갈 하고싶다!-> 이벤트 리스너(스크롤, 클릭), API 요청..
 2. 업데이트 될 때(Updating) -컴포넌트의 props 가 나타나거나 state가 바뀌었을 때
   getDerivedStateFromProps 
   shouldComponentUpdate - 업데이트 되는 성능 최적화.
   부모컴퍼넌트 리랜더->자식컴포넌트도 리랜더..-.>virtual DOM에 다시 그림 ->바뀐것만 브라우저에 반영
   virtual DOM 에 그리는 것 조차 줄이고 싶을 때.
   true 나 false 반환 ->true일때만 랜더링
   getSnapshotBeforeUpdate - 렌더링 이후 그 결과물이 브라우저 상에 반영되기 바로 직전에 호출!
   스크롤 위치, DOM의 크기 가져오고 싶을때
   componentDidUpdate - 컴포넌트가 업데이트 되었을 때.
   만약에 state가 다르면 이런 작업을 하겠다!
 3. 사라질 때 (Unmounting)
   conponentWillUnmount - 컴포넌트 사라질 때,, 리스너 없앨 때
*/
class App extends Component {
state = {
  counter: 1,
  err: false
}
//에러가 발생할 수 있는 컴포넌트의 부모 컴포넌트에서 적어줘야댐
componentDidCatch(err,info)
{
  console.log(err);
  this.setState({
    //state에 err 속성 넣어서 에러 나면 값 true 로 바꿔줌
    //API 통해서 서버로 오류 내용 날리기
    err:true
  });
  console.log(info); //에러 나면 아무것도 안보이니까.
}
constructor(props){
  super(props);
//  화살표 미사용시 this.handleClick = this.handleClick.bind(this);
  console.log('constructor');
}

componentDidMount(){
  console.log('componentDidMount');
  //console.log(this.myDiv.getBoundingClientRect().height);
  //특정 DOM 의 실제 크기가 몇인지,, 
}
handleClick  = ()=>{
  this.setState({
    counter: this.state.counter+1
  });
};
  render() {
    if(this.state.err)
    {
      return (
        <div>에러가 났어용!</div>
      );
    }
    return (
    
      <div ref = //virtual DOM 에 대한 id인 ref 
      { 
        ref =>
        this.myDiv = ref
        }
        >
        <h1>안녕하세요 리액트</h1>

        {/*
        <MyComponent value = {5}/> 
            "5" 해도 됨
        */}
        {this.state.counter<10 &&<MyComponent value = {this.state.counter+1}/>}
        {/* 10 이하일때만 컴포넌트 있음, 10 되면 사라지는데 이때 콘솔 창에 Good Bye 나타남*/}
        {/*1+1+2=4*/}
        <button onClick = {this.handleClick}>Click Me!</button>
        {
        /*
        onClick = "handleClick" 하면 안됨 왜냐면 Component도 일종의 object고 handleClick 은 
                얘의 메소드임
                누르면 props 가 1증가 (얘의 state 값을 props 로 주니까)
                state 는 getDerivedStateFromProps 에서 props +2로 MyComponent의 state 를 리턴하니까
                props 에다 2 더한값으로 계속 바뀜
           */
        }
      </div>
    );
  }
}

export default App;
