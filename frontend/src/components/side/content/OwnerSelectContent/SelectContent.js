import React  from 'react';

const SelectContent = (props) => {
        return (
                <div>
                     {/* 금월,전월,누적 매출(전매장) */}
                     <div>
                        <div>
                              <span>누적매출 :</span>
                              <span>
                                   {props.storeData.totalSales ? JSON.stringify(props.storeData.totalSales[0].sum) : '' }
                              </span>
                        </div>
                     </div>
                              {/* Drink순위  (임시) */}
                              <h4>Drink</h4>
                              <ol>
                                 <li>  
                                       <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[0].name) : '' }</span>
                                       <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[0].price) : '' }</span>
                                 </li>
                                 <li>  
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].name) : '' }</span>
                                       <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].price) : '' }</span> */}
                                 </li>
                                 <li>  
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].name) : '' }</span>
                                       <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].price) : '' }</span> */}
                                 </li>
                              </ol>
                              {/* Food순위 */}
                              <h4>Food</h4>
                              <ol>
                                 <li>  
                                       {/* <span>{props.storeData.foodRank ? JSON.stringify(props.storeData.foodRank[0].name) : '' }</span> */}
                                       {/* <span>{props.storeData.foodRank ? JSON.stringify(props.storeData.foodRank[0].price) : '' }</span> */}
                                 </li>
                                 <li>  
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].name) : '' }</span> */}
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].price) : '' }</span> */}
                                 </li>
                                 <li>  
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].name) : '' }</span> */}
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].price) : '' }</span> */}
                                 </li>
                              </ol>
                              {/* Goods순위 */}
                              <h4>Goods</h4>
                              <ol>
                                 <li>  
                                       {/* <span>{props.storeData.GoodsRank ? JSON.stringify(props.storeData.GoodsRank[0].name) : '' }</span> */}
                                       {/* <span>{props.storeData.GoodsRank ? JSON.stringify(props.storeData.GoodsRank[0].price) : '' }</span> */}
                                 </li>
                                 <li>  
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].name) : '' }</span> */}
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].price) : '' }</span> */}
                                 </li>
                                 <li>  
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].name) : '' }</span> */}
                                       {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].price) : '' }</span> */}
                                 </li>
                              </ol>
                </div>
        );
  
}

export default SelectContent;

