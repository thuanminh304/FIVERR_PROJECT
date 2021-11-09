import React from "react";
import { useSelector } from "react-redux";
const Admincertification = () => {
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const { certification } = currentUser;
  return (
    <div className="adminBox-container adminInfo">
      <div className="adminBox-content">
        <div className="adminBox-title">Certification</div>
        <div className="adminBox-list">
          {certification?.map((item, idx) => {
            return <div key ={idx} className="infoField-List"><span>{item}</span></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Admincertification;
