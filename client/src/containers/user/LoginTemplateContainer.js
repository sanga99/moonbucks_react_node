import React, { Component } from 'react';
import LoginTemplate from '../../components/user/LoginTemplate';
import { connect } from 'react-redux';
import {loginSuccess, loginFail}  from '../../actions/user.action'
// import { bidnActionCreators } from 'redux';
// import * as baseAction from './store/modules/base';

class LoginTemplateContainer extends Component {
    
    // async
    //username, password, handleSubmit, handleChange, handleKeyPress 

    constructor(props){
        super(props);

        this.state ={
            username : '',
            password : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);        
    }


    handleSubmit(e){
        e.preventDefualt();
        this.props.loginSuccess();
    }

    handleChange(e){
        e.preventDefualt();
    }

    handleKeyPress(e){
        e.preventDefualt();
    }



    render() {

        const { username, password,  handleChange, handleKeyPress} = this;
        // action 데이터
        // cosnt { handleSubmit } = this.props.isLoggedIn;

        return (
            <LoginTemplate 
                username={this.username}
                password={this.password}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleKeyPress={this.handleKeyPress}
            /> 
        );
    }
}

// getState() => props형태로 사용
// const mapStateToProps = (state) => {
//     return {
//         // isLoggedIn : state.isLoggedIn,
//         user : state.user
//     };
// }
// = (state) => ({  isLoggenIn: ~~ });

// 액션상태를 바꿀 때 사용, 액션 객체는 함수를 반환!
const dispatchStateToProps = (dispatch) => {
    return {
        loginSuccess : () => dispatch(loginSuccess()),
        loginFail : () => dispatch(loginFail())
    };
}

LoginTemplateContainer = connect(undefined, dispatchStateToProps)(LoginTemplateContainer);
// connect는 react-redux의 내장 aip로, component를 redux Store에 '연결'해준다.

export default LoginTemplateContainer;