import BoxLayout from 'layouts/BoxLayout';
import React from 'react';
import Mainjoblist from './MainJobList';

const Mainjobtype = () => {
    return (
        <div>
            <BoxLayout component={Mainjoblist} title = 'Job List'/>
        </div>
    );
}

export default Mainjobtype;
