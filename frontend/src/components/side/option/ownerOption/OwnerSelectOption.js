import React from 'react';

const OwnerSelectOption  =(props) => {
    
    return (
        <div>
        <select value={props.value} onChange={props.handleChange}>
                <option disabled="disabled"  value="choice">월 선택</option>
            {
                props.month.map((month, i) => 
                        <option key={i} value={month}>{month}</option>
                )}
        </select>
        </div>
    );

}

export default OwnerSelectOption;