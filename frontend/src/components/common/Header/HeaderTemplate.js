import React from 'react';
import { Link } from 'react-router-dom';
//css

const HeaderTemplate = (props) => {
    return(
        <div>
            헤더 component    
            {props.name}
            <Link to="/register" className="btn btn-link">Register</Link>
        </div>
    );
};

export default HeaderTemplate;