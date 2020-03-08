import React, { Component } from 'react';
import axios from 'axios'
import HeaderTemplate from '../../components/common/Header'
// HeaderTemplate에 연결하기 

class HeaderContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            name : ''
        };
    }


    componentDidMount(){
        axios.get('/api/user') 
             .then(res => res.data.name)  
             .then(result => {
                 this.setState({ name : result})
                 console.log(result)
                })
             .catch(err => console.log(err));
     }

    /*
    방법1) 비동기 사용 X
    componentDidMount(){
        fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
                .then(res => res.json())
                .then(json => this.setState({ data : json}));
    }

    */

    // componentDidMount(){
    //     // api
    //     this._callApi()
    //         .then(json => this.setState({ data : json}))
    //         .catch(err => console.log(err));
    // }


    // _callApi = async () => {
    //     // const response = await fetch(`/api`);
    //     // const body = await response.json();
    //     // return body;
    // }
 
    

    render() {
        // const {result} = this.state;
   
        return ( 
                <HeaderTemplate
                    name={this.state.name}
                />

                // {/* {this.state.data.map(el => (
                //     <div>
                //         {el.id} : {el.name}
                //     </div>
                // ))}
                //  {this.state ? this.state.user: "false"} 
                // */}
            
        );
    }
}

export default HeaderContainer;