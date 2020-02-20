import React, { Component } from 'react';
import LoginTemplate from '../../components/user/LoginTemplate';
// import { connect } from 'react-redux';
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
    }

    handleChange(e){
        e.preventDefualt();
    }

    handleKeyPress(e){
        e.preventDefualt();
    }



    render() {

        const { username, password, handleSubmit, handleChange, handleKeyPress} = this;
        // action 데이터는 const{ } = this.props 로 다시 정의하기

        return (
            <LoginTemplate 
                username={this.username}
                password={this.password}
                handleSumit={this.handleSubmit}
                handleChange={this.handleChange}
                handleKeyPress={this.handleKeyPress}
            /> 
        );
    }
}


// connect 
// (state) =>
// (dispatch) =>

export default LoginTemplateContainer;