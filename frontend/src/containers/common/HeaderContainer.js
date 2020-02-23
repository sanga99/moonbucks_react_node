import React, { Component } from 'react';
import HeaderTemplate from '../../components/common/Header'


class HeaderContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            data : []
        };
    }


    /*
    방법1) 비동기 사용 X
    componentDidMount(){
        fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
                .then(res => res.json())
                .then(json => this.setState({ data : json}));
    }

    */

    componentDidMount(){
        // api
        this._callApi()
            .then(json => this.setState({ data : json}))
            .catch(err => console.log(err));
    }


    _callApi = async () =>{
        const response = await fetch(`/api`);
        const body = await response.json();
        return body;
    }
 
    

    render() {
        // const {result} = this.state;
   
        return (
            <div>
                
                {this.state.data.map(el => (
                    <div>
                        {el.id} : {el.name}
                    </div>
                ))}
                {/* {this.state ? this.state.user: "false"} */}
               
            </div>
        );
    }
}

export default HeaderContainer;