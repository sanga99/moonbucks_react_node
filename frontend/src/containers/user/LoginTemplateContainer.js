import React, { Component, useCallback } from 'react';
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
            userId : '',
            password : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangePw = this.handleChangeIdPw.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);        
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefualt();
        dispatch({
            type: LOGIN_REQUEST,
            data: {
                id, password
            }
        });
    }, [id, password]);
    /* 로그인 버튼을 누루면 콜백함수가 진행되면서
        LOG_IN_REQUEST 리듀서가 dispatch(진행) 된다
    */
    // handleSubmit(e){
    //     e.preventDefualt();
    //     this.props.loginSuccess();
    // }

    handleChangeId(e){
        e.preventDefualt();
    }

    handleChangePw(e){
        e.preventDefualt();
    }

    handleKeyPress(e){
        e.preventDefualt();
    }



    render() {

        const { userId, password,  handleChange, handleKeyPress} = this;
        // action 데이터
        // cosnt { handleSubmit } = this.props.isLoggedIn;

        return (
            <LoginTemplate 
                username={this.userId}
                password={this.password}
                handleSubmit={this.handleSubmit}
                handleChangeId={this.handleChangeId}
                handleChangePw={this.hadleChangePw}
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