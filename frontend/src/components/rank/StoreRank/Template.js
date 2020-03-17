import React from 'react';

const Template = (props) =>  {
    return (
        <div>    
          <h3> 매장 순위</h3> 
          <ul>
            <li>{props.first}</li>
            <li>{props.second}</li>
            <li>{props.third}</li>
          </ul>      
        </div>
    );
}

export default Template;