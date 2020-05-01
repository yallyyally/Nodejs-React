/*JSX 기본문법 알아보기
//HTML 처럼 생겼지만 자바스크립트로 변환된다

[React component 작성할때 쓰는 문법]
1. tag 항상 닫기
: html 에서 input이나 br 안닫을때도 있는데 jsx에선 항상 닫아줘야한다
<input type = "text"> : 오류
<input type = "text"/>: 오류 안남- self - closing tag
2. 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야 한다
<div>웅</div> <div>앵</div> : 오류 
<div><div>웅</div> <div>앵</div></div>: 오류 안남
2.5 Fragment 도입됨 - 맨 위에 {Component, Fragment} 해주면 동일한 두개 감쌀 때 
<Fragment><div></div><div></div></Fragment> 해줌 댐
3. JSX 안에 자바스크립트 값 사용하기
*/
import React, { Component,Fragment } from 'react';

class App extends Component {
  render() {
    const name = 'joonhey!'
    const val = 1;
    const value = 2;
    //var은 scope이 function, let은 scope 이 블럭,, 중괄호 나가면 값 바뀜
    //var vs const vs let
    //var은 안쓰고 const 는 안바뀌고 let은 바뀜
    return (
      <Fragment>
      <div>
        <h1>안녕하세요 리액트</h1>
      </div>
      <div>
        hello {name}
        {
          1+1===3?'맞다':'틀리다'
        }
        
        {
          name==='joonhey!'&&<div>벨로퍼트다!!</div>
        }
        {
          (function(){
            if(value===1)
              return <div>1이다!</div>
            else if(value===2)
              return <div>2이다!</div>
            else if(value===3)
              return <div>3이다!</div>
            else
              return <div>없다</div>
          })() //함수 선언 후 바로 호출!!
        }
        {
          (()=>{ //function() -> ()=>
            /*
            화살표 함수의 역할: function 키워드 없이도 함수를 
            만들 수 있으며 , return 을 사용하지않아도 식을 계산한 값이
            자동으로 반환된다.
            function(name){ return name.toUpeerCase();}
            name => name.toUpperCase(); (name) 이거 괄호 생략되구 return 생략된 형태인듯
            const hello = ()=>console.log('Hello'); 파라미터가 없는 경우..
            const location = (name,city) => console.log(`${name}${city}`);
                                         반환형도 생략된 듯
            
            */ 
            switch(val) 
            {
              case 2:
                  return <div>val==2</div>
              case 3:
                  return <div>val==3</div>
              default:
                  return <div> val 값 없음</div>
            }
          })()
        }
      </div>
        </Fragment>
    );
    //중괄호 안에 조건문을 쓸 수는 없으니 삼항연산자..
    //특정 값에 따라 div 가 생겼다가 안생겼다가..
    //여러가지 조건에 따라 렌더링하기-  function() 사용
  }
}

export default App;
