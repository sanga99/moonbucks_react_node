import React, { Component } from 'react';
import ProductsTemplate from '../../../components/rank/ProductsRank' 


 class ProductsRankContainer extends Component {
    
    /*
    db에서 1~4위까지 가져온다.

    조건부1)  공통사용 [ admin/ owner ]
                admin => 전 매장 product 순위
                owner => 해당 매장의 product 순위 
    조건부2)  [ drink(defualt) / food / goods ]
  
    */


    render() {
        return (
            <div>
                <ProductsTemplate 
                // [ product rank ]
                // one={this.state.one}
                // two={this.state.two}
                // three={this.state.three}
                // four={this.state.four}
                /> 
            </div>
        );
    }
}

export default ProductsRankContainer;
