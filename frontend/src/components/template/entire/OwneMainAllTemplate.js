import React from 'react';
import SideContainer from '../../../containers/select/entire/OwnerSelectContainer';
import MainTemplate from '../main/OwnerMainTemplage';
import ProductsChart from '../../../containers/chart/ProductsChartContainer';
import TotalChart from '../../../containers/chart/TotalChartContainer';
import classNames from 'classnames/bind';
import styles from './entire.scss';

const cx = classNames.bind(styles);

const OwnerMainAllTemplate = () =>  {
    return (
        <div className={cx('entire')}>
        <article>
            <SideContainer />
        </article> 
        <main>
            <MainTemplate
                    productsChart={<ProductsChart/>}
                    totalChart={<TotalChart/>}
            />
        </main>
    </div>
    );
    
}

export default OwnerMainAllTemplate;