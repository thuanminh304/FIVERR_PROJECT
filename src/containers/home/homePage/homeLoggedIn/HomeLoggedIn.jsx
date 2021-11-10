import Loader from "components/Loader/Loader";
import React, { lazy, Suspense } from "react";
const EditorsPicks = lazy(() =>
  import("components/Content/HomeLoggedIn/EditorsPicks/EditorsPicks")
);
const CarouselMiddle = lazy(() =>
  import("components/Content/HomeLoggedIn/CarouselMiddle/CarouselMiddle")
);
const VerifiedPro = lazy(() =>
  import("components/Content/HomeLoggedIn/VerifiedPro/VerifiedPro")
);
const PopularGigs = lazy(() =>
  import("components/Content/HomeLoggedIn/PopularGigs/PopularGigs")
);
const CarouselLoggedIn = lazy(() =>
  import("components/Content/HomeLoggedIn/CarouselLoggedIn/CarouselLoggedIn")
);

export default function HomeLoggedIn() {
  return (
    <div
      style={{ width: "95%", margin: "auto", paddingBottom: 50 }}
      className="home-loggedin"
    >
      <Suspense fallback={<Loader />}>
        <CarouselLoggedIn />
        <PopularGigs />
        <VerifiedPro />
        <CarouselMiddle />
        <EditorsPicks />
      </Suspense>
    </div>
  );
}
