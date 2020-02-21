import React from 'react';
import HeaderTemplate from '../../common/Header'
import FooterTemplate from '../../common/Footer'

const PageTemplate = ({children}) => {    // children
    return(
        <div className="">
            <HeaderTemplate/>
            <main>
                {children}
            </main>
            <FooterTemplate/>
        </div>
    );
};

export default PageTemplate;