import React from 'react';
import {useParams} from 'react-router-dom';
import Filter from './Filter/Filter';
import Tablelist from './TableList/TableList';

const Mainjoblist = () => {
    const isParrams = useParams()?.mainJobId;
    return (
        <div className="mainJob-JobList">
            <div className="mainJob-JobList__content">
                <Filter params = {isParrams}/>
                <div className="mainJob-JobList__tableList">
                    <Tablelist/>
                </div>
                {isParrams}
            </div>
            
        </div>
    );
}

export default Mainjoblist;
