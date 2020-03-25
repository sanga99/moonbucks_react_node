import React from 'react';
//css


const OwnerMainTemplate = (props) => {
    return( 
        <div className="main" style={{ marginLeft :'80px'}}>
            {props.productsChart}   
            {props.totalChart}   
        </div>  
    );
};

export default OwnerMainTemplate;