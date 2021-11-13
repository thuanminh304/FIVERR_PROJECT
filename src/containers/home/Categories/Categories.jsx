import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Categories.scss";
import jobApi from "apis/jobApi";
import configNameTypeJob from "setting/configNameTypeJob";
import Loader from "components/Loader/Loader";
const Categories = () => {
  const [mainType, setMainType] = useState(null);
  const [dataImg, setDataImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  const { typeJob } = useParams();
  useEffect(() => {
    const type = mainJob.find((job) => {
      return configNameTypeJob(job.name) === typeJob;
    });
    setMainType(type);
    if (!!type) {
      setLoading(true);
      jobApi
        .getMainJobList(type._id)
        .then((res) => {
          const imageJob = res.data.filter((job) => {
            return !!job.image;
          });
          setLoading(false);
          setDataImg(imageJob);
        })
        .catch((error) => {
          setLoading(false);
          setDataImg([]);
        });
    }
  }, [mainJob, typeJob]);
  const findImage = (id) => {
    if (dataImg.length > 0) {
      const imageUrl = dataImg.find((img) => {
        return img.subType === id;
      });
      if (!!imageUrl) {
        return imageUrl.image;
      } else {
        return "../images/defaultTypeJob/defaultTypeJob.jpg";
      }
    }
  };
  if (!!loading) return <Loader />;
  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__header">
          <h4 className="categories__title">{mainType?.name}</h4>
        </div>
        <div className="categories__content row">
          <div className="content__sideLeft col-3">
            <ul className="sideLeft__list">
              <li className="sideLeft__listItem sideLeft__listTitle">
                {mainType?.name}
              </li>
              {mainType?.subTypeJobs.map((job, idx) => {
                return (
                  <li key={idx} className="sideLeft__listItem">
                    <Link
                      to={
                        "/categories/" +
                        configNameTypeJob(mainType.name) +
                        "/" +
                        job._id
                      }
                    >
                      {job.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="content__sideRight col-9 row">
            {mainType?.subTypeJobs.map((job, idx) => {
              return (
                <div key={idx} className="sideRight__contentItem col-4">
                  <Link
                    to={
                      "/categories/" +
                      configNameTypeJob(mainType.name) +
                      "/" +
                      job._id
                    }
                  >
                    <span>
                      <img
                        src={findImage(job._id)}
                        onError={(e) =>
                          (e.target.onerror = null)(
                            (e.target.src =
                              "../images/defaultTypeJob/defaultTypeJob.jpg")
                          )
                        }
                        alt=""
                      />
                    </span>
                    <p className="title">{job.name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
