import React from 'react';
import './BoxTitle.scss';
import {RightOutlined, FullscreenOutlined, FullscreenExitOutlined} from '@ant-design/icons';
const Boxtitle = (props) => {
    const {title, isHiden, isFullScreen} = props;
    return (
        <div className="boxTitle-content">
            <h4 className="boxTitle-name">{title}</h4>
            <div className={"boxTitle-icon " + (!isHiden?"hiden ":"")}>
                <RightOutlined />
                {!isFullScreen?<FullscreenOutlined />:<FullscreenExitOutlined />}
            </div>
        </div>
    );
}

export default Boxtitle;
