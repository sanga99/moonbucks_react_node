import React from 'react';
import OwnerMainAllTemplate from '../components/template/entire/OwneMainAllTemplate';
import SideTemplate from '../components/template/side/OwnerSideTemplate/SideTemplage';
import MainTemplate from '../components/template/main/OwnerMainTemplage/OwnerMainTemplate';
import PageTemplate from '../components/template/PageTemplate/PageTemplate';

// import container

const OwnerHomePage = () => {
    return(
       <PageTemplate>
            <OwnerMainAllTemplate
                side={<SideTemplate/>}
                main={<MainTemplate/>}
            />
       </PageTemplate>
    );
};

export default OwnerHomePage;