import React from 'react';
import './Theme.scss';
const Theme = (props) => {
    const {color, theme} = props;
    return (
        <div className="themeUI" data-theme={theme}>
            {/* <div style={{backgroundColor: color}} className="header"></div> */}
            <div style={{backgroundColor: color}} className="sideLeft"></div>
        </div>
    );
}

export default Theme;
