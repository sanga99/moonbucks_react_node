import React, { Component } from 'react';
// css

const SideTemplate = () => {
    return(
        <div className="side-container">
            <div className="search">
                검색
                {/* {this.props.search} */}
            </div>
            <div className="main main-content">
                <div className="rank">
                    <div className="storerank">
                        오너지점 랭크
                         {/* {this.props.storerank} */}
                    </div>
                    <div className="drinkrank">
                        오너 음료 랭크
                        {/* {this.props.drinkrank} */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideTemplate;