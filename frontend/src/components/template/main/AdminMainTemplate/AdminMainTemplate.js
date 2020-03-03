import React from 'react';
//css


const AdminMainTemplate = (props) => {
    // const {sideStoreInfo, map }= this.props;
    return( 
        <div className="adminMain container">
            Map 클릭 시, side의 매장 검색 클릭 시 
             SideStoreInfo를 모달로 보여준다. 이를 어디서 처리할지 확인하기
            {props.sideStoreInfo}
            <div >
                {props.map}
            </div>
        </div>
    );
};

export default AdminMainTemplate;