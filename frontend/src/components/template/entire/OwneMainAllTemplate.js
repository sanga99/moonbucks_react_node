import React from 'react';
import SideContainer from '../../../containers/select/entire/OwnerSelectContainer';
import MainTemplate from '../main/OwnerMainTemplage';
import ProductsChart from '../../../containers/chart/ProductsChartContainer';
import TotalChart from '../../../containers/chart/TotalChartContainer';


const OwnerMainAllTemplate = () =>  {
    return (
        <div className="entire-container" style={{ display: "flex", justifyContent:"space-between"}}>
        <article className="side-container" style={{ maxWidth:'25%'}}>
            <SideContainer />
        </article> 
        <main className="main-container" style={{ width:'100%'}}>
            <MainTemplate
                    productsChart={<ProductsChart/>}
                    totalChart={<TotalChart/>}
            />
        </main>
    </div>
    );
    
}

export default OwnerMainAllTemplate;