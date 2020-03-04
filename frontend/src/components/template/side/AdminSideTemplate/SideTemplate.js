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
                </div>
            </div>
        </div>
    );
};

export default SideTemplate;