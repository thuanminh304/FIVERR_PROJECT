import React from 'react';

const Withjobform = (WrappedComponent) => {
    return ({formData, jobTypes})=> {
        return <WrappedComponent formData = {formData} jobTypes={jobTypes}/>
    };
}

export default Withjobform;
