import React, { Component } from 'react';
import ProductsChart from '../../components/chart/ProductsChart';
import axios from 'axios';


class ProductsChartContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    componentWillMount(){       // willMount에 해야 그래프가 그려지듯이 나옴(componentDidMount에서는 한번에 나타난다.)

        const DrinkRankStore = () => {     
            return axios.post('/api/drinkSalesYearStore')
       }
        const FoodRankStore = () => {     
            return  axios.post('/api/foodSalesYearStore')
       }
        const GoodsRankStore = () => {     
            return axios.post('/api/goodsSalesYearStore')
       }
       
            axios.all([DrinkRankStore(), FoodRankStore(), GoodsRankStore()])
                    .then(axios.spread((...req) => {
                        const  drink = req[0];
                        const  food = req[1];
                        const  goods = req[2];
                        let num = [1,2,3,4,5,6,7,8,9,10,11,12];

                        num.forEach(i => {      // month는 mun의 값들이 한 인덱스씩 반복문으로 들어온 값
                            this.setState({
                                ...this.state.data,         // (임시)
                                data : this.state.data.concat({ month: i, drink : drink.data[0].price, food : food.data[0].price, goods :goods.data[0].price})
                                // data : this.state.data.concat({ name: i, drink : drink.data[i].price, food : food.data[i].price, goods :goods.data[i].price})
                            })
                        })

                    })).catch((err) => {
                        console.error(err)
                    })
        }




    

    render() {
        return (
            <div>
                <div>데이터인절트{JSON.stringify(this.state.data)}</div>
                <ProductsChart
                        data={this.state.data}
                />
            </div>
        );
    }
}


export default ProductsChartContainer;


/*
// test DATA
data : [
    {
    name: '1월', drink: 0, food: 0, goods: 0,
    },
    {
    name: '2월', drink: 300, food: 138, goods: 220,
    },
    {
    name: '3월', drink: 200, food: 80, goods: 220,
    },
    {
    name: '4월', drink: 270, food: 398, goods: 200,
    },
    {
    name: '5월', drink: 180, food: 480, goods: 211,
    },
    {
    name: '6월', drink: 230, food: 380, goods: 250,
    },
    {
    name: '7월', drink: 340, food: 430, goods: 210,
    },
    {
    name: '8월', drink: 340, food: 430, goods: 210,
    },
    {
    name: '9월', drink: 340, food: 430, goods: 210,
    },
    {
    name: '10월', drink: 340, food: 430, goods: 200,
    },
    {
    name: '11월', drink: 340, food: 430, goods: 200,
    },
    {
    name: '12월', drink: 340, food: 430, goods: 210,
    },
]


*/