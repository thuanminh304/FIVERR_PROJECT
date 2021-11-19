import React from 'react';
import BoxLayout from 'layouts/BoxLayout';
import ClientUser from './ClientUser';
const Clientlistlayout = () => {
    return (
        <>
            <BoxLayout component={ClientUser} title = 'Client List'/>
        </>
    );
}

export default Clientlistlayout;
