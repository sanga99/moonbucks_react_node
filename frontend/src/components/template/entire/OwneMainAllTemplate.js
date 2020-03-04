import React, { Component } from 'react';
import SideTemplate from '../side/OwnerSideTemplate';
import MainTemplate from '../main/OwnerMainTemplage';
// import DrinkRank
// import Chhart


const OwnerMainAllTemplate = () =>  {
    return (
        <div className="entire-container">
            <article className="side">
                음식부분(전체)
                음료부분
                스넥부분
                상품부분
                {/* <SideTemplate
                    drinkRank={<drinkRank/>}
                /> */}
            </article> 
            <main className="main">
                {/* <MainTemplate
                    chart={<Chart/>}
                /> */}
            </main>
        </div>
    );
    
}

export default OwnerMainAllTemplate;