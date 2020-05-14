import React, { Component } from 'react';
//import './App.css';
import PhoneForm from './components/PhoneForm';
/*
자식컴포넌트의 state 전달 받을 때.
handleCreate 메소드 만들고
자식 컴포넌트에게 앱에서 handleCreate메소드로  props전달하고, 
자식에서 props로 전달한 함수 호출 시켜서 그 data가 app으로 들어가게끔
*/
class App extends Component {

  id = 0; // 고유한 id 값, 렌더링 되는 값이 아니기 때문에 굳이 setState로 넣어줄 필요 x
//setState는 수정시 리랜더링 위함.
  state = {

    //전화번호부 정보들
    information: [],

  }

  handleCreate = (data) =>{
    const {information} = this.state;
    //비구조 할당 문법
    console.log(data);
    /*
    this.state.information.push(data)
    react는 항상 항상성 유지 - 항상 setState를 써줘야 하며, 
    기존에 있는 배열이나 객체를 수정하지 않고 그것을 기반으로 새로운  객체, 배열만들어서
    그걸 주입시켜야댐
    */
    this.setState({
      information: information.concat(Object.assign({},data,{id:this.id++}))
      //비어있는 객체 {}에 data랑 id 집어넣음
      //information: information.concat({...data, id: this.id++})
      //information: information.concat({name:data.name, phone:data.phone,id:this.id++ })
      // information: information.concat(data)
   //   information: this.state.information.concat(data),
      //concat: 기존 배열에 더 추가해서 새로운 배열을 만든다.
      //배열을 전달 받을 경우 한번 더 분해해서 추가한다.
      //push(data)말고 concat(data) ->기존 배열 수정하지 않고  새로운 배열 만들어서 주입시킨거
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate}></PhoneForm>
        {/* App.js에서 만든 함수 자식에게 props 로 넘겨주는 주 */}
        {JSON.stringify(this.state.information)}
        {/* App.js에서 만든 함수 자식에게 props 로 넘겨주는 주 */}
        {/*information 배열 나옴.JSON을 string화 한것*/}
      </div>
    );
  }
}

export default App;