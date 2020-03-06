import React from 'react';
//css


const OwnerMainTemplate = (props) => {
    return( 
         //if 조건부-> 버튼 클릭에 따라 [총매출(월) / products별(월)]
        <div className="main" style={{ justifyContent:'space-between'}}>
            {props.productsChart}   
            {props.totalChart}   
            {/* {props.statistic} */}
        </div>  
    );
};

export default OwnerMainTemplate;