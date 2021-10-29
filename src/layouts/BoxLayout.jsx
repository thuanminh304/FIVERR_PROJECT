import Withbox from 'hocs/withBox';
import React from 'react';
import 'components/Box/Box.scss';
import Boxtitle from 'components/Box/BoxTitle/BoxTitle';
const Boxlayout = (props) => {
    const {title} = props;
    return (
        <div className="box-data">
            <div className="box-data__content">
                <Boxtitle title={title}/>
                {props.children}
            </div>
            
        </div>
    );
}
export default Withbox(Boxlayout);
