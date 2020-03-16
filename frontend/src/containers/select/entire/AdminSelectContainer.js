import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectRequestAction } from '../../../actions/select.action';
import SelectOption from '../../../components/side/option/AdminOption';
import { SelectDefaultContent } from '../../../components/side/content/AdminSelectContent'; // 해당폴더에 여러 파일 있을 경우 { }중괄호에 넣어준다.
import TwoMonthSalesContainer from '../../sales/entire/TwoMonthSalesContainer';
import EntireSalesContainer from '../../sales/entire/EntireSalesContainer';
import StoreRankContainer from '../../rank/entire/store/StoreRankContainer';
import ProductsRankContainer from '../../rank/entire/products/ProductsRankContainer';


class AdminSelectContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            stores : [],
            value : 'choice', 
            sales : [],
            storesRank : [],
            checkedOption : 'Food', // (임시)
            checkNameChange : 1,
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

    // select
    handleChange = (e) => {
        this.setState({
            value : e.target.value
        });
        this.props.handleContent(e.target.value);
    }

    // category radio btn 
    handleRadio = (e) => {
        this.setState({
            checkedOption : e.target.value
        });

        if(this.state.checkedOption=='Drink'){
            this.setState({
               checkNameChange : 0
            })
          
        }else if(this.state.checkedOption=='Food'){
            this.setState({
                checkNameChange : 1
             });
        }else if(this.state.checkedOption=='Goods'){
            this.setState({
                checkNameChange : 2
             })
        }
    }



    render() {
        let content = null;
        console.log('0000');
        if(this.state.value=='choice'){
            content =  <SelectDefaultContent
                            towSales={<TwoMonthSalesContainer/>}
                            entireSales={<EntireSalesContainer/>}
                            storeRankContainer={<StoreRankContainer/>}
                            handleRadio={this.handleRadio}
                            checkedOption={this.state.checkedOption}
                            // ProductsRankContainer={<ProductsRankContainer
                            //                          checkNameChange={this.state.checkNameChange}
                            //                       />}
                             />
        }else{
            // content =  <SelectContent
            //                 sales={this.props.content}
            //             />
        }

        return (
            <div>
                <SelectOption 
                    stores={this.state.stores}
                    value={this.state.value}
                    handleChange={this.handleChange}
                />
               {content}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('maptoprops'+JSON.stringify(state.adminSelected))
    return {
        content : state.adminSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleContent : (value) => dispatch(selectRequestAction(value))
    };
}

AdminSelectContainer = connect(mapStateToProps, mapDispatchToProps)(AdminSelectContainer);


export default AdminSelectContainer;