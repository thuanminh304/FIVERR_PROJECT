import React, { useState } from "react";
import "./editorsPicks.scss";
import Jobrender from "containers/shared/JobRender/JobRender";
import { renderPagination } from "components/render/render";
export default function EditorsPicks(props) {
  const { skillRelateGig, currentUserId } = props;
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 12,
  });
  const totalPage = Math.ceil(skillRelateGig?.length / pagination.limit);
  const listFilter = skillRelateGig?.slice(
    pagination.page * pagination.limit,
    pagination.page * pagination.limit + 12
  );
  return (
    <div className="editors-picks">
      <h3>Editors' picks</h3>
      <div className="editors-row">
        {skillRelateGig?.map((job, idx) => {
          if(job.userCreated !== currentUserId){
            if(!!job.type && !!job.subType && !!job.name && !!job.rating && !!job.price){
              return (
                <Jobrender key={idx} job={job}/>
              );
            }
          }
        })}
      </div>
    </div>
  );
}
