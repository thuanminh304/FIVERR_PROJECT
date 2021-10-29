import React from 'react';
import './BoxTitle.scss';
import {ReloadOutlined, RightOutlined, FullscreenOutlined} from '@ant-design/icons';
const Boxtitle = (props) => {
    const {title} = props;
    return (
        <div className="boxTitle-content">
            <h4 className="boxTitle-name">{title}</h4>
            <div className="boxTitle-icon">
                <ReloadOutlined />
                <RightOutlined />
                <FullscreenOutlined />
            </div>
        </div>
    );
}

export default Boxtitle;
