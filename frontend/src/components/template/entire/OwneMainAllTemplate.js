import React, { Component } from 'react';
import SideTemplate from '../side/OwnerSideTemplate';
import SearchContainer from '../../../containers/search/SearchContainer';
import ProductsRankContainer from '../../../containers/rank/Products/ProductsRankContainer';
import MainTemplate from '../main/OwnerMainTemplage';
import ProductsChart from '../../../containers/chart/ProductsChartContainer';
import TotalChart from '../../../containers/chart/TotalChartContainer';
// import StatisticContainer from ''


const OwnerMainAllTemplate = () =>  {
    return (
        <div className="entire-container" style={{ display: "flex", justifyContent:"space-between"}}>
        <article className="side-container" style={{ maxWidth:'25%'}}>
            <SideTemplate
                search={<SearchContainer/>}
                productsRank={<ProductsRankContainer/>}
                drinkRank={<ProductsRankContainer/>}
                foodRank={<ProductsRankContainer/>}
                goodsRank={<ProductsRankContainer/>}
            />
        </article> 
        <main className="main-container" style={{ width:'100%'}}>
            <MainTemplate
                    productsChart={<ProductsChart/>}
                    totalChart={<TotalChart/>}
                    // statistic={<StatisticContainer/>}
            />
        </main>
    </div>
    );
    
}

export default OwnerMainAllTemplate;