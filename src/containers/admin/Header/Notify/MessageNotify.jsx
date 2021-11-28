import React from 'react';
import { Link } from 'react-router-dom';
import './Notify.scss';
const Messagenotify = (props) => {
    const {message} = props;
    return (
        <div className={"messageNotify notify " + (message === 'message'?"show":'')}>
            <div className="messageNotify__content notify__content">
                <div className="messageNotify__title">
                    <h4>MESSAGES</h4>
                </div>
                <ul className="messageNotify__messageBox">
                    <p>Feature is Processing...</p>
                    {/* <li className="messageBox__item">
                        <div className="item__userItem">
                            <div className="user__img"></div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Vo Nhat Nam
                            </div>
                            <div className="user__message">
                                Lorem ipsum dolor sit amet...
                            </div>
                        </div>
                    </li>
                    <li className="messageBox__item">
                        <div className="item__userItem">
                            <div className="user__img"></div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Vo Nhat Nam
                            </div>
                            <div className="user__message">
                                Lorem ipsum dolor sit amet...
                            </div>
                        </div>
                    </li>
                    <li className="messageBox__item">
                        <div className="item__userItem">
                            <div className="user__img"></div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Vo Nhat Nam
                            </div>
                            <div className="user__message">
                                Lorem ipsum dolor sit amet...
                            </div>
                        </div>
                    </li>
                    <li className="messageBox__item">
                        <div className="item__userItem">
                            <div className="user__img"></div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Vo Nhat Nam
                            </div>
                            <div className="user__message">
                                Lorem ipsum dolor sit amet...
                            </div>
                        </div>
                    </li>
                    <li className="messageBox__item">
                        <div className="item__userItem">
                            <div className="user__img"></div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Vo Nhat Nam
                            </div>
                            <div className="user__message">
                                Lorem ipsum dolor sit amet...
                            </div>
                        </div>
                    </li>
                    <li className="messageBox__item">
                        <div className="item__userItem">
                            <div className="user__img"></div>
                        </div>
                        <div className="item__userItem">
                            <div className="user__name">
                                Vo Nhat Nam
                            </div>
                            <div className="user__message">
                                Lorem ipsum dolor sit amet...
                            </div>
                        </div>
                    </li> */}
                </ul>
                <div className="messageNotify__viewAllBtn">
                    <Link to={'/admin/adminMessage'}>View all message</Link>
                </div>
            </div>
        </div>
    );
}

export default Messagenotify;
