import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../../user/LoginTemplate';
//css

const HeaderTemplate = (props) => {
    return(
        <div>
            <div style={{ background:'gray', height: '30px'}}>
                { props.name ? 
                        <div>
                            <span>{props.name}</span><span>님, 환영합니다. </span> 
                            <button onClick={props.clickLogout} className="btn btn-link">Logout</button>
                        </div>
                        : 
                        <div>
                            <span><Link to="/register" className="btn btn-link">Register</Link></span>
                            {/* <span><button className="btn btn-link" onClick={props.clickLoginEvn}>Login</button></span> */}
                         </div>
                }
                <div style={{ alignContent : 'right'}}>
                    <span>클릭해 주셔서 감사합니다. </span>
                    <a href="#"><button>NOTION 포트폴리오 보러가기</button></a>
                    <a href="#"><button>github</button></a>
                </div>
            </div>
        </div>
       

    );
};

export default HeaderTemplate;