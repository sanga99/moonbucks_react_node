import React from 'react';

const PopupStoreInfo  = (props) =>  {
    
    return (
        <div className="popup" style={{ height: "100%"}}>
            
                <div>{props.id}</div>
                <div>{props.store}</div>
                <div>{props.test}</div>
            
        </div>
    );
}

export default PopupStoreInfo;