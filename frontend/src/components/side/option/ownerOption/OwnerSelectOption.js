import React from 'react';
import { Link } from 'react-router-dom';

const OwnerSelectOption  =(props) => {
    
    return (
        <div>
        <div>
            <label>[Owner]-[우리매장 통계]</label>
            {/*  액터 이미지 <img /> */}
            <Link to="/adminHome" className="btn btn-link">본사입장으로 보기</Link>
        </div>
        <select value={props.value} onChange={props.handleChange}>
                <option disabled="disabled"  value="choice">월 선택</option>
            {
                props.month.map((month, i) => 
                        <option key={i} value={month}>{month}</option>
                )}
        </select>
        </div>
    );

}

export default OwnerSelectOption;