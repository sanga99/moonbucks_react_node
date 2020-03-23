import React  from 'react';
import classNames from 'classnames/bind';
import styles from './Content.scss';

const cx = classNames.bind(styles);

const SelectContent = (props) => {
        return (
                <div>
                     {/* 금월,전월,누적 매출(전매장) */}
                     <div>
                        <div className={cx('sales')}>
                           <span>금월매출 : </span>
                           <span> 
                                 <b>{props.storeData.twoSales ? JSON.stringify(props.storeData.twoSales[0].total_sales) : '' }</b>
                           </span>
                        </div>
                        <div className={cx('sales')}>
                           <span>전월매출 : </span>
                           <span>
                                  <b>{props.storeData.twoSales ? JSON.stringify(props.storeData.twoSales[1].total_sales) : '' }</b>
                           </span>
                        </div>
                        <div className={cx('sales')}>
                              <span>누적매출 : </span>
                              <span>
                                   <b>{props.storeData.totalSales ? JSON.stringify(props.storeData.totalSales[0].sum) : '' }</b>
                              </span>
                        </div>
                     </div>
                        {/* Drink순위  (임시) */}
                        <div className={cx('category-rank')}>
                              <h4>Drink</h4>
                              <ol>
                                    <li>  
                                          {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[0].name).replace(/\"/gi, "") : '' }</span> */}
                                          {/* <span>({props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[0].price) : '' })</span> */}
                                    </li>
                                    <li>  
                                          {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].name).replace(/\"/gi, "") : '' }</span> */}
                                          {/* <span>({props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].price) : '' })</span> */}
                                    </li>
                                    <li>  
                                          {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].name).replace(/\"/gi, "") : '' }</span> */}
                                          {/* <span>({props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].price) : '' })</span> */}
                                    </li>
                              </ol>
                        </div>
                        {/* Food순위 */}
                        <div className={cx('category-rank')}>
                              <h4>Food</h4>
                              <ol>
                                    <li>  
                                          <span>{props.storeData.foodRank ? JSON.stringify(props.storeData.foodRank[0].name).replace(/\"/gi, ""): '' }</span>
                                          <span>({props.storeData.foodRank ? JSON.stringify(props.storeData.foodRank[0].price) : '' })</span>
                                    </li>
                                    <li>  
                                          {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].name).replace(/\"/gi, "") : '' }</span> */}
                                          {/* <span>({props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].price) : '' })</span> */}
                                    </li>
                                    <li>  
                                          {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].name).replace(/\"/gi, "") : '' }</span> */}
                                          {/* <span>({props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].price) : '' })</span> */}
                                    </li>
                              </ol>
                        </div>
                        {/* Goods순위 */}
                        <div className={cx('category-rank')}>
                              <h4>Goods</h4>
                              <ol>
                                    <li>  
                                          <span>{props.storeData.GoodsRank ? JSON.stringify(props.storeData.GoodsRank[0].name).replace(/\"/gi, "") : '' }</span>
                                          <span>({props.storeData.GoodsRank ? JSON.stringify(props.storeData.GoodsRank[0].price) : '' })</span>
                                    </li>
                                    <li>  
                                          {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].name).replace(/\"/gi, "") : '' }</span> */}
                                          {/* <span>({props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[1].price) : '' })</span> */}
                                    </li>
                                    <li>  
                                          {/* <span>{props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].name).replace(/\"/gi, "") : '' }</span> */}
                                          {/* <span>({props.storeData.drinkRank ? JSON.stringify(props.storeData.drinkRank[2].price) : '' })</span> */}
                                    </li>
                              </ol>
                        </div>
                </div>
        );
  
}

export default SelectContent;

