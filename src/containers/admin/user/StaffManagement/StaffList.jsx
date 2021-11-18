import BoxLayout from 'layouts/BoxLayout';
import React from 'react';
import AdminUser from './StaffUser';
const Stafflist = () => {
    return (
        <>
            <BoxLayout component={AdminUser} title = 'Staff List'/>
        </>
    );
}

export default Stafflist;
