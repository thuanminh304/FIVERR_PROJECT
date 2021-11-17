import Loader from "components/Loader/Loader";
import React, { lazy, Suspense } from "react";
const EditorsPicks = lazy(() =>
  import("components/Content/HomeLoggedIn/EditorsPicks/EditorsPicks")
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
      style={{
        width: "95%",
        margin: "auto",
        paddingBottom: 80,
        position: "relative",
      }}
      className="home-loggedin"
    >
      <Suspense fallback={<Loader />}>
        <CarouselLoggedIn />
        <PopularGigs />
        <VerifiedPro />
        <EditorsPicks />
      </Suspense>
    </div>
  );
}
