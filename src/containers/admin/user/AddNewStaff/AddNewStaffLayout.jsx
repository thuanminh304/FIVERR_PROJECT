import BoxLayout from 'layouts/BoxLayout';
import React from 'react';
import AddNewStaff from './AddNewStaff';

const AddNewStaffLayout = () => {
    return (
        <>
            <BoxLayout component={AddNewStaff} title = 'New Staff'/>
        </>
    );
}

export default AddNewStaffLayout;