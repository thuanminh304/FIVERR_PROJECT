import React, { useEffect,useState } from "react";
import { Steps } from "antd";
import RenderDone from "./StepsUpdateGig/RenderDone";
import "./updateJobByUser.scss";
import UpdateOverview from "./StepsUpdateGig/UpdateOverview";
import UpdateUploadAvatar from "./StepsUpdateGig/UpdateUploadAvatar";
import { useDispatch, useSelector } from "react-redux";
import { actGetDetailJobCreatedByUser } from "../createNewJobByUser/StepsCreateNewGig/modules/action";
import { useParams } from "react-router";
const UpdateJobByUser = () => {
  const { Step } = Steps;
  const dispatch = useDispatch();
  const params = useParams();
  
  const { detailJobCreatedByUser } = useSelector(
    (state) => state.profileUserReducer
  );
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    dispatch(actGetDetailJobCreatedByUser(params?.idJobCreateByUser));
  }, []);


  const steps = [
    {
      title: "Overview",
      content: [<UpdateOverview detailJobCreatedByUser={detailJobCreatedByUser} currentStep={[current, setCurrent]} />],
    },
    {
      title: "Upload Avatar",
      content: [<UpdateUploadAvatar detailJobCreatedByUser={detailJobCreatedByUser} currentStep={[current, setCurrent]} />],
    },
    {
      title: "Publish Gig",
      content: [<RenderDone currentStep={[current, setCurrent]} />],
    },
  ];

  return (
    <div className="form-update-by-user">
      <Steps className="stepsbar-update-job-by-user" current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content content-update-job-by-user">
        {steps[current].content}
      </div>
    </div>
  );
};

export default UpdateJobByUser;
