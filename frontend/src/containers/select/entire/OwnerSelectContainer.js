import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRequestActionOwner } from '../../../actions/select.action';
// Option
import SelectOption from '../../../components/side/option/ownerOption';
// Default 
import { SelectDefaultContent } from '../../../components/side/content/OwnerSelectContent'

// Select Chage
import { SelectContent } from '../../../components/side/content/OwnerSelectContent'

// import AdminSelectContent from '../../../components/template/side/AdminSideContent';
// import OwnerSelectOption from '../../../components/select/OwnerSelectOption';

class OwnerSelectContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            month : ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
            value : 'choice', 
        }
    }


    handleChange = (e) => {
        this.setState({
            value : e.target.value
        });
       
        this.props.handleContent(e.target.value);
    }

    render() {
        let templte = null;
        if(this.state.value=='choice'){
            templte =  <SelectDefaultContent
                            // towSales={<TwoMonthSalesContainer/>}
                            // entireSales={<EntireSalesContainer/>}
                            // storeRankContainer={<StoreRankContainer/>}
                            // handleRadio={this.handleRadio}
                            // checkedOption={this.state.checkedOption}
                            // ProductsRankContainer={<Template
                            //                           radiocontent={this.props.radiocontent}
                            //                        />}
                             />
        }else{
            templte =  <SelectContent
                             storeData={this.props.content ? this.props.content : ''}
                        />
        }
        return (
            <div>
                <SelectOption
                    month={this.state.month}
                    value={this.state.value}
                    handleChange={this.handleChange}
                />
                {templte}
                {/* <div>{JSON.stringify(this.props.content)}</div> */}
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    console.log('maptoprops'+JSON.stringify(state.adminSelected))
    return {
        content : state.selected.result,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleContent : (value) => dispatch(selectRequestActionOwner(value))
    };
}

OwnerSelectContainer = connect(mapStateToProps, mapDispatchToProps)(OwnerSelectContainer);


export default OwnerSelectContainer;