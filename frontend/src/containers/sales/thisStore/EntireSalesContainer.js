import React, { Component } from 'react';
import axios from 'axios';
import Template from '../../../components/sales/EntireSales';

class EntireSalesContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            entireSales : []
        }
    }

    componentDidMount(){
        // Owner Side Default

        if(this.props.user){        // 미로그인 -> 요청X
            axios.post('/api/totalSalesConstantStore')
               .then(res => {
                   this.setState({
                       entireSales : res.data
                   });
               })
        }
    }


    render() {
        return (
            <div>
                <Template
                    entireSales={this.state.entireSales[0]}
                />
            </div>
        );
    }
}

export default EntireSalesContainer;