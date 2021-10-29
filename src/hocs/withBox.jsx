import React from 'react';

const Withbox = (WrappedComponent) => {
    return ({component:Component, title}) => {
        return (
            <WrappedComponent title={title}>
                <Component/>
            </WrappedComponent>
        )
    } 
}

export default Withbox;
