import React from 'react';

const OwnerSearchTemplate  =(props) => {
    
    return (
        <div>
        <select>
                <option disabled="disabled" selected="selected">월 선택</option>
            {
                props.month.map((month, i) => 
                        <option key={i}>{month}</option>
            )}
        </select>
      </div>
    );

}

export default OwnerSearchTemplate;