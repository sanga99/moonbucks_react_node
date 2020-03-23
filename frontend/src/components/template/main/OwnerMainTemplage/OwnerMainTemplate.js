import React from 'react';
//css


const OwnerMainTemplate = (props) => {
    return( 
        <div className="main" style={{ justifyContent:'space-between'}}>
            {props.productsChart}   
            {props.totalChart}   
        </div>  
    );
};

export default OwnerMainTemplate;