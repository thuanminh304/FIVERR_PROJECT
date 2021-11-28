import Withbox from "hocs/withBox";
import React, { useState } from "react";
import "components/Box/Box.scss";
import Boxtitle from "components/Box/BoxTitle/BoxTitle";
const Boxlayout = (props) => {
  const { title } = props;
  const [isHiden, setIsHiden] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const handleClick = (e) => {
    const hideBtn = e.target.closest(".boxTitle-icon span:nth-of-type(1)");
    const fullScreenBtn = e.target.closest(
      ".boxTitle-icon span:nth-of-type(2)"
    );
    if (!!hideBtn) {
      hideCompoentData();
    }
    if (!!fullScreenBtn) {
      window.scrollTo(0,0);
      fullScreenData();
    }
  };
  const hideCompoentData = () => {
    setIsHiden(!isHiden);
  };
  const fullScreenData = () => {
    setFullScreen(!isFullScreen);
  };
  return (
    <div className={"box-data " + (isFullScreen ? "fullScreen" : "")}>
      <div className={"box-data__content"} onClick={handleClick}>
        <Boxtitle title={title} isHiden={isHiden} isFullScreen={isFullScreen} />
        <div className={"box-data__data " + (isHiden ? "hiden" : "")}>
          {React.cloneElement(props.children)}
        </div>
      </div>
    </div>
  );
};
export default Withbox(Boxlayout);
