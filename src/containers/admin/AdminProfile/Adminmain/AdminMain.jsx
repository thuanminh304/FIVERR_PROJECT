import React from 'react';
import { Link } from 'react-router-dom';
import './AdminMain.scss';
import { useLocation } from 'react-router-dom';
const Adminmain = () => {
    const location = useLocation();
    return (
        <div className="adminMain">
            <div className="adminMain__content">
                <div className="avatar">
                    <img src="https://fiverr.cybersoft.edu.vn/public/images/avatar/1636196844840_OIP.jpg" alt="" />
                    {/* <div className="avatarText">
                        N
                    </div> */}
                </div>
                <div className="name">
                    Vo Nhat Nam
                </div>
                <div className="option">
                    <Link to='/admin/adminProfile'><button className={"Info " + (location.pathname === '/admin/adminProfile'?"active":"")}>Infomation</button></Link>
                    <Link to='/admin/adminMessage'><button className={"Message " + (location.pathname === '/admin/adminMessage'?"active":"")}>Message</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Adminmain;
