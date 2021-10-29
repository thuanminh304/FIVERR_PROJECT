import React from 'react';
import {useParams} from 'react-router-dom';

const Mainjoblist = () => {
    const isParrams = useParams()?.mainJobId;

    return (
        <div>
            {isParrams}
        </div>
    );
}

export default Mainjoblist;
