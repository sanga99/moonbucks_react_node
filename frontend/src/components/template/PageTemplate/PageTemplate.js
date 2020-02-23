import React from 'react';
import HeaderContainer from '../../../containers/common/HeaderContainer'
import FooterTemplate from '../../common/Footer'

const PageTemplate = ({children}) => {    // children
    return(
        <div className="">
            <HeaderContainer/>
            <main>
                {children}
            </main>
            <FooterTemplate/>
        </div>
    );
};

export default PageTemplate;