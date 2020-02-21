import React, { Component } from 'react';
import RegisterTemplate  from '../../components/user/RegisterTemplate/RegisterTemplate';


class RegisterContainer extends Component {
  
    constructor(props){
        super(props);
        this.state ={
            username :'',
            storename:'',
            email:'',
            password:'',
            password2:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
    }

    handleChange(e){
        e.preventDefault();
    }
    render() {
        
        const { username, storename, email, password, password2, handleSubmit, handleChange } = this;

        return (
            <RegisterTemplate
                username={this.username}
                storename={this.storename}
                email={this.email}
                password={this.password}
                password2={this.password2}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
            />
        );
    }
}

export default RegisterContainer;