import React, { Component } from 'react';
//rcc - class 형, rsc- 함수형

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }
    //input event handling
    //e는 event
    handleChange = (e) =>{
        this.setState({
           [e.target.name] : e.target.value
           //[e.target.name]==n>ame 혹은 phone
           //name 만해주면 전화번호에 입력해도 전화번호 칸에도 안뜨고 div의 왼쪽 값만 바뀜
           //왜냐면 phone state는 바뀐게 없기 때문...
           //state의 속성이랑 input의 name 값이랑 이름이 똑같아서 ㄱㄴ
            
           //target - input, name - input의 name, value - input 입력 값
            //name , phone 의 변화에 따라 state의 해당속성 값이 바뀐다.
        });
    
    };
    handleSubmit = (e) => {
        e.preventDefault();
        //등록 눌렀을 때 새로고침 방지
        
        //props로 받은 함수 호출
        //<PhoneForm onCreate = {this.handleCreate}></PhoneForm>
        //이렇게 받았음
        
        this.props.onCreate({
           name: this.state.name,
           phone: this.state.phone,
        })
        //this.props.onCreate(this.state);
        //부모 컴포넌트 App.js의 handleCreate에게 this.state가 전달된다

        //등록해주면 기존 값들 초기화
        this.setState({
            name: ' ',
            phone: ' '
        })

    };
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                name = "name" 
                placeholder = "이름" 
                onChange = {this.handleChange} 
                value = {this.state.name}
                />
                <input 
                name = "phone"
                placeholder = "전화번호" 
                onChange = {this.handleChange} 
                value = {this.state.phone}
                />
                <button type = "submit">등록</button>
        <div>{/*{this.state.name} {this.state.phone}*/}</div>
         {/*우리가 입력한 name과 phone 값이 state 가 된다*/}
            </form>
        );
    }
}

export default PhoneForm;