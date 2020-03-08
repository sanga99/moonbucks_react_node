import React, { Component } from 'react';
import RegisterTemplate  from '../../components/user/RegisterTemplate/RegisterTemplate';
import axios  from 'axios';


class RegisterContainer extends Component {
  
    constructor(props){
        super(props);
        this.state ={
            username :'',
            storename:'',
            storeOption: [],
            email:'',
            password:'',
            password2:'',
            storephone:'',
            address:'',
            phone:''
        }
    }

    /* 
        이메일(ID) 유효성검사
        비밀번호 정규식표현
        전화번호 정규식표현
        비밀번호 체크
        매장 select -> axios로 매장 값들 가져온다. -> 선택 값으로 storename 저장

    */

    componentDidMount(){
        /* const storeData = [
            {   "storeId": 1, "name": "test역삼DT점"  },
            {   "storeId": 2, "name": "test종로"     },
            {   "storeId": 3, "name": "test삼성"    }
            ]
        */
        axios.post('/api/store')        // (주의) 서버에서 꼭!! res.send로 보내야함 (res.json은 {"~","~"}세부내용이 jsx에서 추출이 안된다.)
            .then(res => res.data)
            .then(result => {
                console.log(result)
                this.setState({
                    storeOption : result       
                })
            })
            .catch(err => console.error(err))


    }


    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChangeStore = (e) => {
        this.setState({
            storename : e.target.value
        });
    }


    handleChangeOwner = (e) => {
        this.setState({
            username : e.target.value
        });
    }

    handleChangeId = (e) => {
        this.setState({
            email : e.target.value
        });
    }

    handleChangePw = (e) => {
        this.setState({
            password : e.target.value
        });
    }
    
    handleChangePw2 = (e) => {
        this.setState({
            password2 : e.target.value
        });
    }



    handleChangeOwnerPhone = (e) => {
        this.setState({
            phone : e.target.value
        });
    }



    render() {
        
        

        return (
            <RegisterTemplate
                username={this.state.username}
                storeOption={this.state.storeOption}
                storename={this.state.storename}      // 선택한 매장 value
                address={this.state.addrss}
                email={this.state.email}
                password={this.state.password}
                password2={this.state.password2}
                storephone={this.state.storephone}
                phone={this.state.phone}
                handleSubmit={this.handleSubmit}
                handleChangeStore={this.handleChangeStore}
                handleChangeOwner={this.handleChangeOwner}
                handleChangeId={this.handleChangeId}
                handleChangePw={this.handleChangePw}
                handleChangePw2={this.handleChangePw2}
                handleChangeOwnerPhone={this.handleChangeOwnerPhone}
            />
        );
    }
}

export default RegisterContainer;