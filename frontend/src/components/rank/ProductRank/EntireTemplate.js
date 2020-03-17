import React from 'react';
//css

const EntireTemplate = (props) => {

    return(   // (임시)
        <div>
                 {/* Drink순위  (임시) */}
                 <h4>Drink</h4>
                  <ol>
                      <li>  
                            <span>{props.drink[0] ? JSON.stringify(props.drink[0].name) : '' }</span>
                            <span>({props.drink[0] ? JSON.stringify(props.drink[0].price) : '' })</span>
                      </li>
                      <li>  
                            {/* <span>{props.drink[1] ? JSON.stringify(props.drink[1].name) : '' }</span> */}
                            {/* <span>({props.drink[1] ? JSON.stringify(props.drink[1].price) : '' })</span> */}
                      </li>
                      <li> 
                            {/* <span>{props.drink[2] ? JSON.stringify(props.drink[2].name) : '' }</span> */}
                            {/* <span>({props.drink[2] ? JSON.stringify(props.drink[2].price) : '' })</span>  */}
                      </li>
                  </ol>
                  {/* Food순위 */}
                  <h4>Food</h4>
                  <ol>
                      {/* <li>  
                            <span>{props.food[0] ? JSON.stringify(props.food[0].name) : '' }</span>
                            <span>({props.food[0] ? JSON.stringify(props.food[0].price) : '' })</span>
                      </li>
                      <li>  
                            <span>{props.food[1] ? JSON.stringify(props.food[1].name) : '' }</span>
                            <span>({props.food[1] ? JSON.stringify(props.food[1].price) : '' })</span>
                      </li>
                      <li> 
                            <span>{props.food[2] ? JSON.stringify(props.food[2].name) : '' }</span>
                            <span>({props.food[2] ? JSON.stringify(props.food[2].price) : '' })</span> 
                      </li> */}
                  </ol>
                  {/* Goods순위 */}
                  <h4>Goods</h4>
                  <ol>
                       {/* <li>  
                            <span>{props.goods[0] ? JSON.stringify(props.goods[0].name) : '' }</span>
                            <span>({props.goods[0] ? JSON.stringify(props.goods[0].price) : '' })</span>
                      </li>
                      <li>  
                            <span>{props.goods[1] ? JSON.stringify(props.goods[1].name) : '' }</span>
                            <span>({props.goods[1] ? JSON.stringify(props.goods[1].price) : '' })</span>
                      </li>
                      <li> 
                            <span>{props.goods[2] ? JSON.stringify(props.goods[2].name) : '' }</span>
                            <span>({props.goods[2] ? JSON.stringify(props.goods[2].price) : '' })</span> 
                      </li> */}
                  </ol>
          </div>
      );
    };

export default EntireTemplate;

