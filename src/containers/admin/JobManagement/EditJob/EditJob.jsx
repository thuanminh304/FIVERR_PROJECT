import BoxLayout from 'layouts/BoxLayout';
import React from 'react';
import Jobinfo from './JobInfo/JobInfo';

const Editjob = () => {
    return (
        <div>
            <BoxLayout component={Jobinfo} title = 'Job Info'/>
        </div>
    );
}

export default Editjob;
