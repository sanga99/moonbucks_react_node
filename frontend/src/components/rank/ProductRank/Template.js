import React from 'react';
//css

const Template = (props) => {

    return(   // (임시)
        <div>
              <ol>
                 <li><span>{props.radiocontent ? JSON.stringify(props.radiocontent[0].name) : ''}</span>
                     <span>({props.radiocontent ? JSON.stringify(props.radiocontent[0].price) : ''})</span>
                </li>
                  {/* <li><span>{props.second}</span><span>({props.secondPrice})</span></li>
                  <li><span>{props.third}</span><span>({props.thirdPrice})</span></li>  */}
              </ol>
              </div>
              );
            };

export default Template;

