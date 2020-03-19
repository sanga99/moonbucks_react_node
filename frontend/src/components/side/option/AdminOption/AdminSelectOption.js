import React from 'react';
import { Link } from 'react-router-dom'

const AdminSelectOption = (props) =>  {
    // 선택 값 -> action -> reducer(선택값) -> saga -> api -> [sideContent]dispatch(결과값)

     return (
        <div>
            <div>
                <label>[Admin]-[전체지점 통계]</label>
                {/*  액터 이미지 <img /> */}
                <Link to="/ownerHome" className="btn btn-link">매장주 입장으로 보기</Link>
            </div>
            <div style={{ color : 'gray'}}>* 검색으로 보기</div>
           <select value={props.value} onChange={props.handleChange}>
                <option disabled="disabled"  value="choice">매장선택</option>
               {
                   props.stores.map((store, i) => 
                        <option key={i} value={store}>{store}</option>
                )}
           </select>
        </div>
        
    );
}

export default AdminSelectOption;