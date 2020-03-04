import React, { Component } from 'react';
import AdminSearchTemplate from '../../components/search/AdminSearchTemplate';
import OwnerSearchTemplate from '../../components/search/OwnerSearchTemplate';

class SearchContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            // id : '' 
            id : 'admin'    // 임시  
        }
    }
    
    // 임시) admin, owner 공통

    render() {
        let component = null;

        if(this.state.id === 'admin'){
            component = <AdminSearchTemplate />;
        }else{
             component = <OwnerSearchTemplate />;
        }

        return (
            <div>
              {component}
            </div>
        );
    }
}

export default SearchContainer;