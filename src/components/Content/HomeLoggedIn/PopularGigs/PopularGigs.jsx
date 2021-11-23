import React from "react";
import "../EditorsPicks/editorsPicks.scss";
import Jobrender from "containers/shared/JobRender/JobRender";
export default function GigsInWordPress(props) {
  const { gigs, currentUserId } = props;
  return (
    <div className="popular-gigs">
      <h3>
        Most popular Gigs in <span>{gigs[0].type.name}</span>{" "}
      </h3>
      <div className="popular-gigsRow">
        {gigs.slice(0, 8).map((job, idx) => {
          if (job.userCreated !== currentUserId) {
            return <Jobrender key={idx} job={job} />;
          }
        })}
      </div>
    </div>
  );
}
