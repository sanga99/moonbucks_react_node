import React from 'react';
// css

const SideTemplate = (props) => {
    return(
        <div>   
            <div className="search" >
                {props.search}
            </div>
            <div className="rank rank-content" style={{ display:'contents'}}>
                <div className="rank">
                    <div className="rank storerank" sytle={{}}>
                         {props.storeRank}
                    </div>
                    <div className="rank productsrank" sytle={{}}>
                        {props.productsRank}
                    </div>
                    <div className="rank productsrank2" sytle={{}}>
                        {/*  필터값에 따라 결과 달라짐(default drink) - ProductsRankContainer에서 조건 처리 */}
                        {props.productsRank2}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideTemplate;