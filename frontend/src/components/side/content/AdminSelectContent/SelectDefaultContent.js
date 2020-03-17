import React  from 'react';

const SelectDefaultContent = (props) => {
        return (
                <div>
                     {/* 금월,전월,누적 매출(전매장) */}
                     <div className="">
                        <div className="">{props.towSales}</div>
                        <div className="">{props.entireSales}</div>
                     </div>
                     {/* 매장순위 */}
                  <div id="stores_rank" className="stores_rank">
                     <div>{props.storeRankContainer}</div>   
                  </div>
                     {/* 카테고리 radio btn(전매장) */}
                   <div id="category" className="category">
                        <label>                             {/* state객체사용시 checked={this.state.radioGroup['Drink']}    */}
                           <input type="radio" value="Drink" checked={props.checkedOption==='Drink'}
                                                            onChange={props.handleRadio}/>
                           Drink</label>
                        <label>
                           <input type="radio" value="Food" checked={props.checkedOption==='Food'}
                                                            onChange={props.handleRadio}/>
                           Food</label>
                        <label>
                           <input type="radio" value="Goods" checked={props.checkedOption==='Goods'}
                                                            onChange={props.handleRadio}/>
                           Goods</label>
                     </div> 
                  <div>{props.productsRankContainer}</div>
                </div>
        );
  
}

export default SelectDefaultContent;

