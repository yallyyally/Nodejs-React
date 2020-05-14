import React, { Component } from 'react';
import  Phoneinfo  from './Phoneinfo';
//App >  PhoneInfoList > Phoneinfo
//정보 방향: App-handleCreate->PhoneForm -onCreate->App-props(information[])->
//PhoneInfoList-props(info)->Phoneinfo

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }
    //아직 PhoneForm 에서 입력을 안해서 값이 없는 경우, Phoneinfo에서 이걸 게시를 못하니
    //default prop 값을 넣어준다
    render() {
        const { data } = this.props;
        //App.js에서 state 로 주는것,


        //if(!data) return null;

        const list = data.map(
            info => (<Phoneinfo info = {info} key = {info.id}/>)
        );
        //Phoneinfo 에서..
        /*const {name, phone, id} = this.props.info;*/
        //숫자들 각각 배열을 가지고 Phoneinfo로 바꿔준것

        /****key****/
        /*
            key가 없다면? 
            배열에 원소가 삽입 혹은 삭제 될 때 
            해당 행만 (중간에) 삽입 혹은 삭제 되면 되는데
            중간부터 값이 주르륵 바낌 
            index와의 차이? 제거 하면 아이디 값이랑 인덱스 값이랑 달라짐.
         */
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;