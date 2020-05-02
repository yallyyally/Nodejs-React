//새로운 컴포넌트 ! 클래스 형태로 만들어 줄것
import React, {Component} from 'react'

class Counter extends Component{
  state = {
  //state는 문자열이나 숫자면 안되고 객체여야 한다.
    number:0  
  };
  //state는 컴포넌트 내부에서 변경할 수 있다.
  //변경할 땐 언제나 setState함수를 사용한다.->그때마다 컴포넌트 리 랜더링
  

  constructor(props){
    //컴포넌트가 만들어질때마다 호출됨.
    super(props);
    //extends Component 했기 때문에 Component가 가지고 있는 생성함수 먼저 호출을 해줘야 함
    this.handleIncrease = this.handleIncrease.bind(this);
    // handleIncrease 가 사용하고 있는 this 가 여기 Constructor가 사용하고 있는 this 와 같게 하기 위해 바인딩 해줌
  }
  //number(값)에 변화를 주기 위한 커스텀 메소드
  handleIncrease() {
    /*
    render 함수와 다르게 화살표 함수로 작성한 이유: 
    일반 함수로 handleIncrease(){} 하면 메소드 내부에서 this 가 뭔지 모르게 된다.
    즉 this가 undefined 됨 그래서 setState도 못함
    */
    //this.state.number = this.state.number+1;
    //이런거 저얼대 하면 안됨! 왜냐면 state 값이 update 됐는지 안됐는지 컴포넌트 자신이 모름
    this.setState({
      number: this.state.number +1
    });
  };
  handleDecrease = () => {
    this.setState({
      number: this.state.number -1
    });
  };
  render()
  {
    return (
      <div>
        <h>카운터</h>
        <div>값: {this.state.number} </div>
        <button onClick = {this.handleIncrease}>+</button>
        <button onClick = {this.handleDecrease}>-</button>
      </div>
    );    
  }
}
export default Counter;