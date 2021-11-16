import React, { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { adminRoutes } from "routes/index";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import "./AdminTitle.scss";
const Admintitle = (props) => {
  const location = useLocation();
  const isParrams = useParams()?.mainJobId;
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  const { path } = props;
  const pathname = location.pathname;
  const [title, setTitle] = useState(null);
  const titleIntital = {
    name: "",
    href: [],
  };
  useEffect(() => {
    if (!!isParrams) {
      const titleName = mainJob?.find((job) => {
        return job._id === isParrams;
      });
      titleIntital.name = titleName?.name;
      const component = adminRoutes.find((route) => {
        return route.path === path;
      });
      titleIntital.href = [...component.href];
      titleIntital.href.push(titleIntital.name);
      setTitle(titleIntital);
    } else {
      const component = adminRoutes.find((route) => {
        return route.path === path;
      });
      titleIntital.name = component.name;
      titleIntital.href = [...component.href];
      setTitle(titleIntital);
    }
  }, [pathname, mainJob]);
  const renderLink = (idx,href) => {
      const linkBox = document.querySelector('.tabLink');
      const heightBox = linkBox.offsetHeight;
      if(window.innerWidth < 576){
        if(title?.href.length>=2 && idx === 0){
            return "..."
        }
        else{
            return <p>{href}</p>
        }
      }
      else{
        return <p>{href}</p>
      }
  }
  return (
    <div className="admin-content__title">
      <div className="admin-content__container">
        <h4>{title?.name}</h4>
        <div className="tabLink">
          <HomeOutlined />
          <Link to="/admin">Home</Link>
          {title?.href?.map((href, idx) => {
            return (
              <Fragment key={idx}>
                <RightOutlined />
                {renderLink(idx,href)}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Admintitle);
