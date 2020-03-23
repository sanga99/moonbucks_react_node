import React, { Component } from 'react';
import axios from 'axios';
import HeaderTemplate from '../../components/common/Header';


class HeaderContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            owner : '',
            storeName : '',
            flash : '' 
        };
    }


    componentDidMount(){
        axios.post('/api/user') 
             .then(res => {
                 this.setState({
                     owner : res.data.name, 
                     storeName : res.data.storeName
                 })
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
                            owner : false
                        })
                    }
                })
     }

    

    render() {
        
   
        return ( 
                <HeaderTemplate
                    owner={this.state.owner}
                    storeName={this.state.storeName}
                    clickLoginEvn={this.clickLoginEvn}
                    clickLogin={this.state.clickLogin}
                    clickLogout={this.clickLogout}
                    // login
                    owner={this.state.owner}
                    error={this.state.flash.error}
                />
        );
    }
}

export default HeaderContainer;