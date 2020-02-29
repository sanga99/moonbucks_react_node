import React from 'react';
// css

const SideTemplate = () => {
    return(
        <div className="side-container">
            <div className="search">
                서치(필터포함)
                {/* {this.props.search} */}
            </div>
            <div className="main main-content">
                <div className="rank">
                    <div className="storerank">
                        지점 랭크
                         {/* {this.props.storeRank} */}
                    </div>
                    <div className="drinkrank">
                        음료 랭크
                        {/* {this.props.drinkRank} */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideTemplate;