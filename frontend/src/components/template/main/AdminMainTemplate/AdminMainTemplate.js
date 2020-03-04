import React from 'react';
//css


const AdminMainTemplate = (props) => {
  
    return(    
        <div className="main side-popup" style={{ display:'flex', justifyContent:'space-between'}}>
            {props.sidePopupStoreInfo}
            {props.map}   
        </div>        
        
    );
};

export default AdminMainTemplate;