import React from 'react';
import SideTemplate from '../side/AdminSideTemplate';
import SearchContainer from '../../../containers/search/SearchContainer';
import StoreRankContainer from '../../../containers/rank/Store/StoreRankContainer';
import ProductsRankContainer from '../../../containers/rank/Products/ProductsRankContainer';
import MainTemplate from '../main/AdminMainTemplate';
import SidePopupContainer from '../../../containers/popupInfo/Store/SidePopupContainer';
import Map from '../../../containers/map/MapContainer';

const AdminMainAllTemplate = () => {
    return (
        <div className="entire-container" style={{ display: "flex", justifyContent:"space-between"}}>
            <article className="side-container" style={{ maxWidth:'25%'}}>
                <SideTemplate
                    search={<SearchContainer/>}
                    storeRank={<StoreRankContainer/>}
                    productsRank={<ProductsRankContainer/>}
                    productRank2={<ProductsRankContainer/>}
                />
            </article> 
            <main className="main-container" style={{ width:'100%'}}>
                <MainTemplate
                    sidePopupStoreInfo={<SidePopupContainer/>}
                    map={<Map/>}
                />
            </main>
        </div>
    );
}

export default AdminMainAllTemplate;

