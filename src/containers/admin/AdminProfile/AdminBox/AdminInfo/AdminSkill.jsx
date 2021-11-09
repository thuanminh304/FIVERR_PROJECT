import React from "react";
import { useSelector } from "react-redux";
const Adminskill = () => {
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const { skill } = currentUser;
  return (
    <div className="adminBox-container adminInfo">
      <div className="adminBox-content">
        <div className="adminBox-title">Skill</div>
        <div className="adminBox-list">
          {skill?.map((item, idx) => {
            return (
              <div key={idx} className="infoField-List">
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Adminskill;
