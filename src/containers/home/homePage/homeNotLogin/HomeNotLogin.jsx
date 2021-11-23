import React from "react";
import Carousel from "components/Content/HomeNotLogin/Carousel/Carousel";
import PopularServices from "components/Content/HomeNotLogin/PopularServices/PopularServices";
import Video from "components/Content/HomeNotLogin/Video/Video";
import Explore from "components/Content/HomeNotLogin/Explore/Explore";
import Business from "components/Content/HomeNotLogin/Business/Business";
import Review from "components/Content/HomeNotLogin/Review/Review";
import LogoMaker from "components/Content/HomeNotLogin/LogoMaker/LogoMaker";
import Projects from "components/Content/HomeNotLogin/Projects/Projects";
import Guides from "components/Content/HomeNotLogin/Guides/Guides";
import GetStarted from "components/Content/HomeNotLogin/GetStarted/GetStarted";
export default function HomeNotLogin() {
  return (
    <div
      className="home-not-login"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <Carousel />
      <PopularServices />
      <Video />
      <Explore />
      <Business />
      <Review />
      <LogoMaker />
      <Projects />
      <Guides />
      <GetStarted />
    </div>
  );
}
