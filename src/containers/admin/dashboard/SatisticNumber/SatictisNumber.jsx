import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";
import {
  FundProjectionScreenOutlined,
  UserOutlined,
  AuditOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./Satictisnumber.scss";
const Satictisnumber = () => {
  const [data, setData] = useState(null);
  const [displayIcon, setDisplayIcon] = useState('');
  const { userSatictis } = useSelector((state) => state.managementUserReducer);
  const { dataSatictis } = useSelector((state) => state.JobManagementReducer);
  useEffect(() => {
    const jobQty = dataSatictis.reduce((qty, job) => {
      return qty + job.jobQty;
    }, 0);
    const clientQty = userSatictis.length;
    const jobBookingQty = userSatictis.reduce((qty, user) => {
        return qty + user.jobBookingQty;
      }, 0);
    const earningMoney = dataSatictis.reduce((qty, job) => {
        return qty + job.price;
      }, 0);
    console.log(jobQty,clientQty,jobBookingQty, earningMoney);
    const dataNum = {
        jobQty: jobQty,
        clientQty: clientQty,
        jobBookingQty: jobBookingQty,
        earningMoney: earningMoney
    };
    setData(dataNum);
  }, [userSatictis, dataSatictis]);
  useEffect(()=>{
    const adminContent = document.querySelector('.adminContent__main');
    new ResizeObserver(()=>changeSizeElement(adminContent)).observe(adminContent);
  },[]);
  const changeSizeElement = (adminContent) => {
    if(window.innerWidth>=768 && adminContent.offsetWidth<990){
      setDisplayIcon('dontShow');
    }
    else{
      setDisplayIcon('');
    }
  }
  return (
    <div className="satisticContent__conatiner row">
      <div className="satistic__item col-12 col-sm-6">
        <div className="satistic__itemContent satistic_itemJobQty">
          <div className={"satistic__itemIcon " + displayIcon}>
            <FundProjectionScreenOutlined />
          </div>
          <div className="satistic__itemNumber">
            <div className="itemTitle">Job Quanlity</div>
            <div className="itemNumber">
              <CountUp end={!data?0:data.jobQty} duration={5} />
            </div>
          </div>
        </div>
      </div>
      <div className="satistic__item col-12 col-sm-6">
        <div className="satistic__itemContent satistic_itemClientQty">
          <div className={"satistic__itemIcon " + displayIcon}>
            <UserOutlined />
          </div>
          <div className="satistic__itemNumber">
            <div className="itemTitle">Client Quanlity</div>
            <div className="itemNumber">
              <CountUp end={!data?0:data.clientQty} duration={5} />
            </div>
          </div>
        </div>
      </div>
      <div className="satistic__item col-12 col-sm-6">
        <div className="satistic__itemContent satistic_itemjobBookingQty">
          <div className={"satistic__itemIcon " + displayIcon}>
            <AuditOutlined />
          </div>
          <div className="satistic__itemNumber">
            <div className="itemTitle">Job Booking Qty</div>
            <div className="itemNumber">
              <CountUp end={!data?0:data.jobBookingQty} duration={5} />
            </div>
          </div>
        </div>
      </div>
      <div className="satistic__item col-12 col-sm-6">
        <div className="satistic__itemContent satistic_itemjobEarning">
          <div className={"satistic__itemIcon " + displayIcon}>
            <DollarOutlined />
          </div>
          <div className="satistic__itemNumber">
            <div className="itemTitle">Earning</div>
            <div className="itemNumber">
              $<CountUp end={!data?0:data.earningMoney} duration={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satictisnumber;
