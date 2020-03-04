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
                <div className="rank productsrank" sytle={{}}>
                    {props.productsRank}
                </div>
                <div className="rank drinkrank" sytle={{}}>
                     {props.drnikRank}
                </div>
                <div className="rank foodrank" sytle={{}}>
                     {props.foodRank}
                </div>
                <div className="rank goodsrank" sytle={{}}>
                     {props.goodsRank}
                </div>
            </div>
        </div>
    </div>
    );
};

export default SideTemplate;