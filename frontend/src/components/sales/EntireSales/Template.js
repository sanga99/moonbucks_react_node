import React from 'react';

const Template = (props) =>  {
    // 이 템플릿은 [전매장, 한매장] 두 경우 모두 사용합니다. 
    return (
        <div>
            <span>누적매출 :</span>
            <span>
                {props.entireSales ? JSON.stringify(props.entireSales.sum) : ''}
            </span>
        </div>
    );
    
}

export default Template;