import Carousel from "components/Content/Carousel/Carousel";
import PopularServices from "components/Content/PopularServices/PopularServices";
import React from "react";
export default function Home() {
  return (
    <div className="home-container">
      <Carousel />
<PopularServices/>
    </div>
  );
}
