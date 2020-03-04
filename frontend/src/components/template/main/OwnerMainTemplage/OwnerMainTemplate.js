import React from 'react';
//css


const OwnerMainTemplate = (props) => {
    return( 
        <div className="main" style={{ justifyContent:'space-between'}}>
            {props.chart}   
            {/* {props.statistic} */}
        </div>  
    );
};

export default OwnerMainTemplate;