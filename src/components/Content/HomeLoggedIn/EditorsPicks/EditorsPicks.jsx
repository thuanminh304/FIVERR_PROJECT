import React from "react";
import "./editorsPicks.scss";
import Jobrender from "containers/shared/JobRender/JobRender";
export default function EditorsPicks(props) {
  const {skillRelateGig, currentUserId} = props;
  return (
    <div className="editors-picks">
      <h3>Editors' picks</h3>
      <div className="editors-row">
        {skillRelateGig?.map((job, idx) => {
          if(job.userCreated !== currentUserId){
            return (
              <Jobrender key={job._id} job={job}/>
            );
          }
        })}
      </div>
    </div>
  );
}
