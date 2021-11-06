import React from "react";
import { Button} from "antd";

export default function RenderDone(props) {
  const [current, setCurrent] = props.currentStep;

  return (
    <div>
      <Button
        className="btn-pre-steps"
        onClick={() => {
          setCurrent(current - 1);
        }}
      >
        Previous
      </Button>
    </div>
  );
}
