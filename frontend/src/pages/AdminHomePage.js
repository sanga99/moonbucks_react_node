import React from 'react';
import AdminMainAllTemplate from '../components/template/main/AdminMainTemplate';
import SideTemplate from '../components/template/side/AdminSideTemplate/SideTemplate'
import MainTemplate from '../components/template/main/AdminMainTemplate/AdminMainTemplate'
import PageTemplate from '../components/template/PageTemplate/PageTemplate'

// import container

const AdminHomePage = () => {
    return(
       <PageTemplate>
            <AdminMainAllTemplate
                side={<SideTemplate/>}
                main={<MainTemplate/>}
            />
       </PageTemplate>
    );
};

export default AdminHomePage;