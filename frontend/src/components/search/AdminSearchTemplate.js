import React from 'react';

const AdminSearchTemplate  =(props) => {

    return (
        <div>
            <div style={{ color : 'gray'}}>* 검색으로 보기</div>
           <select>
                <option disabled="disabled" selected="selected">매장선택</option>
               {
                   props.stores.map((store, i) => 
                        <option key={i}>{store}</option>
                )}
           </select>
        </div>
        
    );

}

export default AdminSearchTemplate;