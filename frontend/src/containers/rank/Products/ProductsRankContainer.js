import React, { Component } from 'react';
import ProductsTemplate from '../../../components/rank/ProductsRank' 


 class ProductsRankContainer extends Component {
    
    /*
    api로 1~4위까지 가져온다. 

    - 고정 => product rank
    - 필터에 따라 [ drink(Default) /  food / goods ] 순위 보여줌
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
               <ProductsTemplate 
                // [ drink rank ] => Defualt
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
