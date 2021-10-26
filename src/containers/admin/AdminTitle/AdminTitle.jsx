import React, {useEffect, useState, Fragment} from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import {Link} from 'react-router-dom';
import {adminRoutes} from 'routes/index';
import {HomeOutlined, RightOutlined} from '@ant-design/icons';
import './AdminTitle.scss';
const Admintitle = (props) => {
    const history = useHistory();
    const location = useLocation();
    console.log(useParams());
    const isParrams = useParams()?.mainJobId;
    console.log(history,location);
    const {path} = props;
    const pathname = location.pathname;
    const [title,setTitle] = useState(null);
    const titleIntital = {
        name: '',
        href:[],
    }
    console.log(isParrams);
    useEffect(() => {
        if(!!isParrams){
            titleIntital.name = isParrams;
            const component = adminRoutes.find(route => {
                return route.path == path;
            });
            titleIntital.href = [...component.href];
            titleIntital.href.push(titleIntital.name);
            console.log(titleIntital.href);
            setTitle(titleIntital);
        }
        else{
            const component = adminRoutes.find(route => {
                return route.path == path;
            });
            titleIntital.name = component.name;
            titleIntital.href = [...component.href];
            setTitle(titleIntital);
        }
    },[pathname]);
    console.log(title);
    return (
        <div className ="admin-content__title" >
            <div className="admin-content__container">
                <h4>{title?.name}</h4>
                <div className="tabLink">
                    <HomeOutlined /><Link to='/admin'>Home</Link>
                    {title?.href?.map((href,idx)=> {
                        return (
                            <Fragment key={idx}>
                            <RightOutlined />
                            <p>{href}</p> 
                            </Fragment>  
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Admintitle;
