import React, { Component } from 'react';
import axios from 'axios';
import HeaderTemplate from '../../components/common/Header';
import LoginPage from '../../components/user/LoginTemplate';


class HeaderContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            name : '',
            flash : '' 
        };
    }


    componentDidMount(){
        axios.get('/api/user') 
             .then(res => res.data.name)  
             .then(result => {
                 this.setState({ name : result})
                })
             .catch(err => console.log(err));


         axios.get('api/loginError')
             .then(res => res.data)  
             .then(result => {
                 this.setState({ flash : result})       //  { "error" : "에러 메세지 내용"}
                 console.log('client'+JSON.stringify(result));
                })
             .catch(err => console.log(JSON.stringify(err)))
     }


     clickLogout = () => {
         axios.get('/api/logout')
                .then(res => {
                    if(res.data.succ){
                        this.setState({
                            name : false
                        })
                    }
                })
     }

    

    render() {
        
   
        return ( 
                <div>
                    <HeaderTemplate
                        name={this.state.name}
                        clickLoginEvn={this.clickLoginEvn}
                        clickLogin={this.state.clickLogin}
                        clickLogout={this.clickLogout}
                    />
                    <div>
                    {
                    this.state.name ? '' :
                    <div style={{ background:'skyblue', height: '100px'}}>
                        <LoginPage 
                            error={this.state.flash.error}
                        />
                    </div>
                    }
                    </div>
                </div>
                
        );
    }
}

export default HeaderContainer;