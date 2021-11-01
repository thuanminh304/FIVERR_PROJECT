import React, {useEffect, useState} from 'react';
import Mainjoblist from "./MainJobList/MainJobList";
import Listsubjob from './ListSubJob/ListSubJob';
const Mainjoblayout = (props) => {
    console.log(props);
    const [currentMainJobType, setCurrentMainJobType] = useState('');
    const setCurrentMainJobTypeID = (id) => {
        setCurrentMainJobType(id);
    }
    return (
        <>
            <Mainjoblist setCurrentMainJobTypeID={setCurrentMainJobTypeID}/>
            <Listsubjob jobId = {currentMainJobType}/>
        </>
    );
}

export default Mainjoblayout;
