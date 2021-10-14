import React from 'react';

const Withform = (WrappedComponent) => {
    return ({formData, ...props}) => {
        return <WrappedComponent formData = {formData}/>
    };
}

export default Withform;
