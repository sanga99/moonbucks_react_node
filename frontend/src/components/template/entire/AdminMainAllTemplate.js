import React, { Component } from 'react';
import SideTemplate from '../side/AdminSideTemplate';
import Search from '../../search';
// import StoreRank
// import DrinkRank
import MainTemplate from '../main/AdminMainTemplate';
import SideStoreInfo from '../../info/Store'
import Map from '../../map';

const AdminMainAllTemplate = () => {
    return (
        <div className="entire-container">
            <article className="side">
                {/* <SideTemplate
                    search={<Search/>}
                    storeRank={<StoreRank/>}
                    drinkRank={<DrinkRank/>}
                /> */}
            </article> 
            <main className="main">
                <MainTemplate
                    sideStoreInfo={<SideStoreInfo/>}
                    map={<Map/>}
                />
            </main>
        </div>
    );
}

export default AdminMainAllTemplate;

