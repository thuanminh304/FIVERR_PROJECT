import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ImportOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import './SideBar.scss';
import Theme from './Theme/Theme';
import { CHANGE_THEME } from '../modules/types';
import { Link } from 'react-router-dom';
import { actLogout } from 'containers/shared/Auth/module/actions';
const Sidebar = (props) => {
    const {setting} = props;
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.AuthReducer);
    const {name, avatar, email} = currentUser;
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
    };
    const logOut = () => {
        dispatch(actLogout());
        window.location.replace("/");
    }
    return (
        <div className={"sideBar " + (setting==='setting'?'show':'')} onClick = {handleClick}>
            <div className="sideBar__content">
                <div className="userCurrent">
                    <div className="userImg">
                        {!!avatar?(<img src ={avatar} alt='admin-avatar'/>):(<p>{email.slice(0,1).toUpperCase()}</p>)}
                    </div>
                    <div className="userName">
                        {name}
                    </div>
                    <div className="userFeature">
                        <Link to="/"><ImportOutlined /></Link>
                        <Link to="/admin/adminProfile"><UserOutlined /></Link>
                        <PoweroffOutlined onClick={logOut}/>
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
