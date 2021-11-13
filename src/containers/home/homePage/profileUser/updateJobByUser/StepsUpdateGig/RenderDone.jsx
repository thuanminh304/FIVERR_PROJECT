import messageConfig from "components/Message/message";
import React from "react";

export default function RenderDone(props) {
  const [current, setCurrent] = props.currentStep;
  return (
    <div className="render-done">
      <div className="done-content">
        <h3>Almost there...</h3>
        <p>Let's publish your Gig and get some buyers rolling in.</p>
      </div>
      <div className="steps-action">
        <button
          className="btn-pre-steps"
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          Previous
        </button>
        <button
          className="btn-next-steps"
          onClick={() => {
            messageConfig.loadingToSuccess();
          }}
        >
          Public Gig
        </button>
      </div>
    </div>
  );
}
