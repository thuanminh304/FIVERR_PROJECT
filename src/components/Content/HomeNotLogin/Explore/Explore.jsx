import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import configName from "setting/configNameTypeJob";
import "./explore.scss";
export default function Explore() {
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  return (
    <section id="explore" className="explore">
      <div className="explore__content">
        <h2>Explore the marketplace</h2>
        <div className="explore__grid">
          <div className="explore__row  ">
            {mainJob?.map((maintype, idx) => {
              let name = configName(maintype.name);
              return (
                <div key={maintype._id} className="explore__item">
                  <Link to={`/categories/${name}`}>
                    <img src={`images/imagesHomeNoLogin/explore/${name}.svg`} alt="" onError={(e) => (e.target.src =`images/imagesHomeNoLogin/explore/defaultExplore.svg`)}/>
                    <div className="border-explore" />
                    <p>{maintype.name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
