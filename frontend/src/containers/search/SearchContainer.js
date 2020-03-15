import React, { Component } from 'react';
import axios from 'axios';
import AdminSearchTemplate from '../../components/search/AdminSearchTemplate';
import OwnerSearchTemplate from '../../components/search/OwnerSearchTemplate';

class SearchContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            id : 'admin',    // 임시  
            stores : [],
            month : ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
        }
    }


    componentDidMount(){

        // [admin]
        axios.post('/api/storesName')
                .then(res => {      //  [{"name":"test역삼DT점"},{"name":"test종로"},{"name":"test삼성"}]

                    for(let i=0; i < res.data.length; i++){
                        this.setState({
                            stores: this.state.stores.concat(res.data[i].name)
                        });
                    }
                 })
                 .catch(err => {
                     console.log(err);
                 })

                 

    }

 

    
    // 임시) admin, owner 공통

    render() {
        let component = null;

        if(this.state.id === 'admin'){
            component = <AdminSearchTemplate 
                            stores={this.state.stores}
                        />;
        }else{
             component = <OwnerSearchTemplate
                            month={this.state.month}
                         />;
        }

        return (
            <div>
              {component}
            </div>
        );
    }
}

export default SearchContainer;