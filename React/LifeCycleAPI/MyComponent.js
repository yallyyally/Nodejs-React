import React, { Component } from 'react'

class MyComponent extends Component{
  state={
    value: 0
  };
  static getDerivedStateFromProps(nextProps,prevState)
  { //props 로 받은 값으로 state setState 시킴(리턴값 바로 사용)
    if(prevState.value !==nextProps.value)
    //prevState -> 원래 state
    //nextProps -> 현재 받은 props 
      return {
        //현재 state를 리턴. 객체라 중괄호 사용
        //함수는 ; 안쓰고 메소드(+리턴)는 ; 씀..
        //{}중괄호 쓰는건 구조분해와 관련.
        value: nextProps.value+2
        //0->5+2
      };
    return null; //같으면 변경 안할거
  }
  shouldComponentUpdate(nextProps,nextState)
  { //특정 조건에 따라 렌더링을 막아줌..
    if(nextProps.value === 10)
        return false; //false면 값 안바뀜 (props 가 10이지만 화면엔 여전히 9(render 이후 함수 호출 X),
                    // 한번 더 누르면 11로 넘어감. )
    return true;
  }
  componentDidUpdate(prevProps,prevState)
  {//컴포넌트가 바뀌면 어떠한 작업을 하게끔
    if(this.props.value !== prevProps.value)
    {
      console.log('props value 값 바뀜');
    }
  }
  /*
  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    
    실제 DOM에 업데이트가 일어나기 진전의 스냅샷
    새 데이터가 상단에 추가 되어도 계속 같은 것이 보이도록, 즉 스크롤이 알아서
    내가 현재 보고 있는 데이터로 움직여서 업데이트 되도록 하는것이 목표
    scrollHeight 스크롤 위치 저장하고 있고,
    scrollTop은 크롬엔 이미 구현되어 있기에 처리하지 않도록 하기 위함
   새로운 스크롤 위치가 저장될것
    
   if(prevState.array !== this.state.array)
   {
     const {
       scrollTop, scrollHeight
     } = this.list; //이전배열과 현재 배열이 다르다면 스크롤 위치를 this.list 값으로 설정
     //이때의 this.list 는 현재 보고 있는 부분?
    }
    //여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있다.
    return {
      scrollTop, scrollHeight
    };
  }
  */
 /*
 componentDidUpdate(prevProps,prevState,snapshot)
 {
   if(snapshot)
   { //{scrollTop,scrollHeight} 반환받아왔음
     const{strollTop} = this.list;
     //this.list 는 지금 업데이트 할 스크롤 위치
     if(scrollTop !== snapshot.scrollTop)
      return; 
      //이미 구현되어 있는 경우, 예전 스냅샷의 스크롤위치와 다를 경우 아무짓도 안함
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      //지금 보고있는거의 스크롤 위치 - 예전 스크롤 위치
      this.list.scrollTop += diff;
      //실제 위치 더 내려옴
   }

 }
  */
 componentWillUnmount()
 {//컴포넌트가 불필요해지면 제거한다. 제거시 실행됨
  console.log('Good Bye');
 }

  render()
  {
    return(
      <div>
        {/*this.props.newval.attr -> componentDidCatch(err,info) in parent Componet App.js*/}
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;