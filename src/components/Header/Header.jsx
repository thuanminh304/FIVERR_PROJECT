import { actLogout } from 'containers/shared/Auth/module/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state=> state.AuthReducer);
    const logOut = () => {
        dispatch(actLogout());
    }
    return (
        <div>
            {!currentUser?._id?
                (<>
                    <NavLink to='/login'>Sign in</NavLink>
                    <NavLink to='/join'>Join with Us</NavLink>
                </>)
                : (<button onClick={logOut}>Logout</button>)
            }
        </div>
    );
}

export default Header;
