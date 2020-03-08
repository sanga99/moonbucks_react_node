import React from 'react';
//css

const HeaderTemplate = (props) => {
    return(
        <div>
            헤더 component    
            {props.name}
        </div>
    );
};

export default HeaderTemplate;