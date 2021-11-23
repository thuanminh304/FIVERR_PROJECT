import React from "react";
import "./editorsPicks.scss";
import Jobrender from "containers/shared/JobRender/JobRender";
export default function EditorsPicks(props) {
  const {skillRelateGig} = props;
  return (
    <div className="editors-picks">
      <h3>Editors' picks</h3>
      <div className="editors-row">
        {skillRelateGig?.map((job, idx) => {
          return (
            <Jobrender key={idx} job={job}/>
          );
        })}
      </div>
    </div>
  );
}
