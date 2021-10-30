import CarouselLoggedIn from "components/Content/HomeLoggedIn/CarouselLoggedIn/CarouselLoggedIn";
import PopularGigs from "components/Content/HomeLoggedIn/PopularGigs/PopularGigs";
import VerifiedPro from "components/Content/HomeLoggedIn/VerifiedPro/VerifiedPro";
import CarouselMiddle from "components/Content/HomeLoggedIn/CarouselMiddle/CarouselMiddle";
import EditorsPicks from "components/Content/HomeLoggedIn/EditorsPicks/EditorsPicks";

import React from "react";

export default function HomeLoggedIn() {
  return (
    <div style={{ width: "95%", margin: "auto" }} className="home-loggedin">
      <CarouselLoggedIn />
      <PopularGigs />
      <VerifiedPro />
      <CarouselMiddle />
      <EditorsPicks />

    </div>
  );
}
