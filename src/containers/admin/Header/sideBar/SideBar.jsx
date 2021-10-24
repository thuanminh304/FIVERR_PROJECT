import React from 'react';
import {useDispatch} from 'react-redux';
import { MailOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import './SideBar.scss';
import Theme from './Theme/Theme';
import { CHANGE_THEME } from '../modules/types';
const Sidebar = (props) => {
    const {setting} = props;
    const dispatch = useDispatch();
    const handleClick = (e) => {
        const themeItem = e.target.closest('.themeUI');
        const themeBtn = e.target.closest('button.standardBtn');
        if(!!themeItem){
            const themeId = themeItem.dataset.theme;
            dispatch({type:CHANGE_THEME, payload: themeId});
        }
        if(!!themeBtn){
            const themeId = themeBtn.dataset.theme;
            dispatch({type:CHANGE_THEME, payload: themeId});
        }
    }
    return (
        <div className={"sideBar " + (setting==='setting'?'show':'')} onClick = {handleClick}>
            <div className="sideBar__content">
                <div className="userCurrent">
                    <div className="userImg">
                        <div></div>
                    </div>
                    <div className="userName">
                        Vo Nhat Nam
                    </div>
                    <div className="userFeature">
                        <MailOutlined />
                        <UserOutlined />
                        <PoweroffOutlined />
                    </div>
                </div>
                <div className="sideBar__theme">
                    <div className="theme__title">
                        <h6>Theme</h6>
                    </div>
                    <div className="theme__item">
                            <Theme color={'#fff'} theme={"lightTheme"}/>
                            <Theme color={'#303548'} theme={"darkTheme"}/>
                            <Theme color={'#5093eb'} theme={"custom1"}/>
                            <Theme color={'#6673fc'} theme={"custom2"}/>
                            <Theme color={'#49d075'} theme={"custom3"}/>
                            <Theme color={'#e44f56'} theme={"custom4"}/>
                        </div>
                </div>
                <div className="sideBar__theme">
                    <div className="theme__title">
                        <h6>Standard theme</h6>
                    </div>
                    <div className="theme__standardBtn">
                        <button data-theme="lightTheme" className="standardBtn standardBtn-light">Light</button>
                        <button data-theme="darkTheme" className="standardBtn standardBtn-dark">Dark</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
