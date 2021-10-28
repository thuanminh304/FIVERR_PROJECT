import CarouselLoggedIn from "components/Content/HomeLoggedIn/CarouselLoggedIn/CarouselLoggedIn";
import PopularGigs from "components/Content/HomeLoggedIn/PopularGigs/PopularGigs";
import React from "react";

export default function HomeLoggedIn() {
  return (
    <div style={{ width: "95%", margin: "auto" }} className="home-loggedin">
      <CarouselLoggedIn />
      <PopularGigs />
    </div>
  );
}
