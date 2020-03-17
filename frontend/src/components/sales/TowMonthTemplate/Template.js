import React from 'react';

const Template = (props) =>  {
    // 이 템플릿은 [전매장, 한매장] 두 경우 모두 사용합니다. 
    return (
        <div>
             <div>
                <span>금월매출 :</span><span>{props.thisMonth}</span>
            </div>
            <div>
                <span>전월매출 :</span><span>{props.lastMonth}</span>
            </div>
        </div>
    );
    
}

export default Template;