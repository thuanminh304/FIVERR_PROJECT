import React, {useState, useEffect} from 'react';
import Sidebar from './sideBar/SideBar';
import {BellOutlined, MessageOutlined, MoreOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import './AdminHeader.scss';
import Messagenotify from './Notify/MessageNotify';
import Notify from './Notify/Notify';
import { DELETE_NOTIFY, FIX_SIDE_BAR, SEE_NOTIFY } from './modules/types';
import Notifynote from './Notify/NotifyNote/NotifyNote';
const Adminheader = () => {
    const [showSideRight, setShowSideRight] = useState(false);
    const [sideContent, setContent] = useState('');
    const dispatch = useDispatch();
    const {isFixSideBar, themeColor} = useSelector(state=>state.AdminDashBoardSettingReducer);
    const {isNote, listNote, isNewNotify} = useSelector(state=>state.AdminDashBoardSettingReducer);
    const {currentUser} = useSelector(state=>state.AuthReducer);
    const {avatar, email} = currentUser;
    const handleClick = (event) => {
        const noteBtn = event.target.closest('.noteIcon');
        const messageIcon = event.target.closest('.messageIcon');
        const settingBtn = event.target.closest('.settingIcon');
        if(!!noteBtn || !!messageIcon || !!settingBtn) {
            let isShow = !showSideRight;
            setShowSideRight(isShow);
            let type = '';
            if(!!isShow){
                if(!!noteBtn){
                    type = 'note';
                    dispatch({type:SEE_NOTIFY});
                }
                else if(!!messageIcon){
                    type = 'message';
                }
                else{
                    type = 'setting';
                }
            }
            else{
                type = '';
            }
            setTimeout(() => {
                setContent(type);
            },200)
        }
        else{
            setContent('');
            setTimeout(() => {
                setShowSideRight(false);
            }, 100);   
        }
    };
    const fixSideBar = () => {
        const fixSideBar = !isFixSideBar;
        dispatch({type: FIX_SIDE_BAR,payload:fixSideBar})
    };
    const deleteNotify = () => {
        dispatch({type: DELETE_NOTIFY});
    }
    return (
        <header className = {"AdminHeader " +  themeColor} onClick={handleClick}>
            <div className="adminHeader-container">
            <div className="adminHeader-content">
                <div className="header__left">
                    <div className={"header__logoBranch " + (!isFixSideBar?"inFix":"")}>
                        <h4>{!isFixSideBar?"F":"FiverrFake"}</h4>
                    </div>
                    <div className={"header__humbergetBtn " + (!isFixSideBar?"inFix":"")} onClick={fixSideBar}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li> 
                        </ul>
                    </div>
                </div>
                <div className="header__user">
                    <div className="user__item noteIcon">
                        <BellOutlined />
                        
                        {isNewNotify?(
                            <>
                                <div className="notice"></div>
                                <div className="notice__heartbeat"></div>
                            </>
                        ):''}
                    </div>
                    <div className="user__item messageIcon">
                        <MessageOutlined />
                        {/* <div className="notice"></div> */}
                        {/* <div className="notice__heartbeat"></div> */}
                    </div>
                    <div className="user__item userIcon">
                        <div className="notice"></div>
                        <div className="userImg">
                            {!!avatar?(<img src={avatar} alt="admin avatar" />):(<p>{email.slice(0,1).toUpperCase()}</p>)}
                        </div>
                    </div>
                    <div className="user__item settingIcon">
                        <MoreOutlined />
                    </div>
                </div>
            </div>
            <div className={"adminHeader-sideBar " + (showSideRight? 'show': '')}>
            </div>
            <Sidebar setting={sideContent}/>
            <Messagenotify message={sideContent}/>
            <Notify notify={sideContent} deleteNotify={deleteNotify} listNote={listNote}/>
            {isNote?<Notifynote/>:""}
            </div>
        </header>
    );
}

export default Adminheader;
