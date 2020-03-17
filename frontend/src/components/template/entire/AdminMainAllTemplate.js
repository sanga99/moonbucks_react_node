import React from 'react';
import SelectContainer from '../../../containers/select/entire/AdminSelectContainer';
import Map from '../../map';

const AdminMainAllTemplate = () => {
    return (
        <div className="entire-container" style={{ display: "flex", justifyContent:"space-between"}}>
            <article className="side-container" style={{ maxWidth:'25%'}}>
                <SelectContainer/>
            </article> 
            <main className="main-container" style={{ width:'100%' }}>
                <Map/>
            </main>
        </div>
    );
}

export default AdminMainAllTemplate;

