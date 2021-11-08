import React from "react";

const Admininfoperson = () => {
  return (
    <div className="adminBox-container adminInfo">
      <div className="adminBox-content">
        <div className="adminBox-title">Information</div>
        <div className="adminBox-list">
          <div className="adminInfo__content">
            <div className="infoField">Email:</div>
            <div className="infoValue">nhatnamvstt@gmail.com</div>
          </div>
          <div className="adminInfo__content">
            <div className="infoField">Phone:</div>
            <div className="infoValue">0774161123</div>
          </div>
          <div className="adminInfo__content">
            <div className="infoField">Birthday:</div>
            <div className="infoValue">20/10/1999</div>
          </div>
          <div className="adminInfo__content">
            <div className="infoField">Gender:</div>
            <div className="infoValue">Male</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admininfoperson;
