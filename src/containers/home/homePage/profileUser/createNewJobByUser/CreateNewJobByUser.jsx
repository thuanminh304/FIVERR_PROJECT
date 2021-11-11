import React,{ useState } from "react";
import { Steps} from "antd";
import RenderOverview from "./StepsCreateNewGig/RenderOverview";
import RenderUploadAvatar from "./StepsCreateNewGig/RenderUploadAvatar";
import RenderDone from "./StepsCreateNewGig/RenderDone";
import "./createNewJobByUser.scss";
const CreateNewJobByUser = () => {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Overview",
      content: [<RenderOverview currentStep={[current, setCurrent]} />],
    },
    {
      title: "Upload Avatar",
      content: [<RenderUploadAvatar currentStep={[current, setCurrent]} />],
    },
    {
      title: "Publish Gig",
      content: [<RenderDone currentStep={[current, setCurrent]} />],
    },
  ];

  return (
    <div className="form-create-job-by-user">
      <Steps className="stepsbar-create-job-by-user" current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content content-create-job-by-user">
        {steps[current].content}
      </div>
    </div>
  );
};

export default CreateNewJobByUser;
