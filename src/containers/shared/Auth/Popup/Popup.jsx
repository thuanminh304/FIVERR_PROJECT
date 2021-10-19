import React from 'react';
import './Popup.scss';
const Popup = (props) => {
    const {note, isShowPopupContent} = props;
    return (
        <div className="userIndentify-Popup">
            <div className={"popup-container " + (isShowPopupContent?"show":"")}>
                <div className="popup-content">
                    {note}
                </div>
            </div>
        </div>
    );
}

export default Popup;
