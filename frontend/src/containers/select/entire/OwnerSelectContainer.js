import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRequestActionOwner } from '../../../actions/select.action';
// Option
import SelectOption from '../../../components/side/option/ownerOption';
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

        return (
            <div>
                <SelectOption
                    month={this.state.month}
                    value={this.state.value}
                    handleChange={this.handleChange}
                />
                <div>{JSON.stringify(this.props.content)}</div>
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