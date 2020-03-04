import React from 'react';
import HeaderContainer from '../../../containers/common/HeaderContainer'
import FooterTemplate from '../../common/Footer'
import HeaderTemplate from '../../common/Header';


const PageTemplate = ({children}) => {    // children

    return(
        <div style={{ display:'flex', flexDirection:'column'}}>
            <header style={{  height:'50px', width:'100%'}}>
                <HeaderTemplate/>
            </header>
            <main style={{ minheight:'100%'}}>
                {children}
            </main>
            <footer style={{ position:'fixed',bottom:'0px', height:'40px' }}>
                <FooterTemplate/>
            </footer>
        </div>
    );
};

export default PageTemplate;