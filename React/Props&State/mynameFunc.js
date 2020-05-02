//새 파일에 컴포넌트 새로 만들기
import React/*, { Component }*/ from 'react'
//내부적으로 jsx 만들어질때 React 를 사용하기 때문
//함수형 컴포넌트니(state, lifecycle 없음)까 클래스 컴포너트 import 안해줘도 됨
/*
단순한 기능을 하는 컴포넌트의 경우, 클래스 말고 함수형 컴포넌트로 많이 작성해준다.
마운트 속도가 미세하게 클래스보다 더 빠르고
불필요한 기능이 없어서 메모리 자원도 덜 사용한다. 
*/
const MyName = ({name})=>{
//{name}의 이유: props 에 속한 속성이라 그런 듯?
//암튼 매개변수 name, 화살표 함수 반환값..
/*
({name}) - 비구조화 할당.
1. 구조분해 할당 - 배열이나 객체의 속성을 해체하여 그 값을 개별변수에 담을수 있게 하는 JavaScript 표현식.

[a, b, ...nameoji] = [10, 20, 30, 40, 50];
console.log(nameoji);// Array [30,40,50]
console.log(b); // 20

object p = {a:10,b:20};
({ a, b } = p);
console.log(a); // 10
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

배열에서 값을 분해해서 새로운 배열(데이터 뭉치)를 만들 수도 있다
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1

변수에 디폴트값을 할당하면, 분해한 값이 undefined 일 때 디폴트 값을 사용한다.
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

[a,b] = [b,a] 
이렇게 하면 임시 변수를 사용하지 않고도 두 값 교환 ㄱㄴ
[a, ,b] = [1,2,3]
이렇게 하면 a=1, b=3 저장 됨

함수에 이용>
function sayHello({name:'뫄뫄',age:24}){
  console.log(name+'의 나이는'+age);
  //전달해준 객체의 name 값과 age 값을 하나하나 추출해서 넣어준 것

}
*/
  return <div>안녕하세요! 제 이름은 <b>{name}</b> 입니다.</div>;
  //혹은 return (<div>웅앵웅</div> );
  //객체 파라미터  MyName 내부의 name값을 prop 으로 받아와서 사용..
};
MyName.defaultProps = {
  name: '뫄뫄'
}

export default MyName;