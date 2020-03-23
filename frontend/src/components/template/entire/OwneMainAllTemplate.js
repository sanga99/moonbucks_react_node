import React, { Component } from 'react';
import axios from 'axios';
import SideContainer from '../../../containers/select/entire/OwnerSelectContainer';
import MainTemplate from '../main/OwnerMainTemplage';
import ProductsChart from '../../../containers/chart/ProductsChartContainer';
import TotalChart from '../../../containers/chart/TotalChartContainer';
import classNames from 'classnames/bind';
import styles from './entire.scss';

const cx = classNames.bind(styles);

class OwnerMainAllTemplate extends Component {
    constructor(props){
        super(props);
        this.state = {
            blur : 'entire default'
        }
    }

    componentDidMount(){
        axios.post('/api/user') 
        .then(res => {
            console.log('333333')
            // if(res.data.email){
                this.setState({
                    blur : 'entire user'
                })
            // }
        })  
        .catch(err => console.log(err));
    }



    render(){

        return (
                // <div className={cx(this.state.blur)}>
                <div className={cx('entire')}> 
                    <article>
                        <SideContainer />
                    </article> 
                    <main>
                        <MainTemplate
                                productsChart={<ProductsChart/>}
                                totalChart={<TotalChart/>}
                        />
                    </main>
                 </div> 
        );
    }
}

export default OwnerMainAllTemplate;