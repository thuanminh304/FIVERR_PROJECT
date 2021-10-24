import React from 'react';
import {CheckOutlined, CloseOutlined, ExclamationOutlined} from '@ant-design/icons';
import './Notify.scss';
const Notify = (props) => {
    const {notify} = props;
    return (
        <div className={"notify " + (notify === 'note'?"show":'')}>
            <div className="messageNotify__content notify__content">
                <div className="messageNotify__title">
                    <h4>NOTIFY</h4>
                </div>
                <ul className="messageNotify__messageBox">
                    <li className="messageBox__item notifyBox__item">
                        <div className="item__userItem item__notifyType">
                            <div className="notifyType__icon">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Add new user
                            </div>
                        </div>
                    </li>
                    <li className="messageBox__item notifyBox__item">
                        <div className="item__userItem item__notifyType">
                            <div className="notifyType__icon error">
                                <CloseOutlined />
                            </div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Add new user
                            </div>
                        </div>
                    </li>
                    <li className="messageBox__item notifyBox__item">
                        <div className="item__userItem item__notifyType">
                            <div className="notifyType__icon">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Delete admin user
                            </div>
                        </div>
                    </li>
                    <li className="messageBox__item notifyBox__item">
                        <div className="item__userItem item__notifyType">
                            <div className="notifyType__icon warning">
                                <ExclamationOutlined />
                            </div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Do not finish task today!
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="messageNotify__viewAllBtn notify__footer">
                    {/* <p>View all message</p> */}
                </div>
            </div>
        </div>
    );
}

export default Notify;
