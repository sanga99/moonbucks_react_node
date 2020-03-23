import React, { Component } from 'react';
import axios from 'axios';
import Template from '../../../../components/rank/StoreRank';

class StoreRankContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            first : '',
            second : '',
            third : '임시-storeRankContainer'
        }
    }


    componentDidMount(){
        axios.post('/api/StoresRankMonth')
        .then(res => {
            this.setState({
                first : res.data[0].name,
                second : res.data[1].name,
                // third : res.data[3].name   // (임시)
            });
        })
    }
    

    render() {
        return (
            <Template
                first={JSON.stringify(this.state.first).replace(/\"/gi, "")}
                second={JSON.stringify(this.state.second).replace(/\"/gi, "")}
                third={JSON.stringify(this.state.third).replace(/\"/gi, "")}
            />
        );
    }
}

export default StoreRankContainer;