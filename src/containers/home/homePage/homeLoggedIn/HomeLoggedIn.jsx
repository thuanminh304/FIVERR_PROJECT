import Loader from "components/Loader/Loader";
import { actGetHagtagJob } from "Modules/JobManagement/actions";
import React, { lazy, Suspense, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import './HomeLoggedIn.scss';
const EditorsPicks = lazy(() =>
  import("components/Content/HomeLoggedIn/EditorsPicks/EditorsPicks")
);
const PopularGigs = lazy(() =>
  import("components/Content/HomeLoggedIn/PopularGigs/PopularGigs")
);
const CarouselLoggedIn = lazy(() =>
  import("components/Content/HomeLoggedIn/CarouselLoggedIn/CarouselLoggedIn")
);
export default function HomeLoggedIn() {
  const dispatch = useDispatch();
  const {currentPage} = useSelector((state) => state.AuthReducer);
  const {jobHagTagUser, loading} = useSelector((state) => state.JobManagementReducer);
  useEffect(()=>{
    dispatch(actGetHagtagJob());
  },[]);
  if(!!loading) return <Loader />;
  return (
    <div
      style={{
        maxWidth:"1400px",
        width: "95%",
        margin: "auto",
        paddingBottom: 80,
        position: "relative",
      }}
      className="home-loggedin"
    >
      <Suspense fallback={<Loader />}>
      <CarouselLoggedIn />
        {jobHagTagUser?.typeRelate.length>0?<PopularGigs gigs={jobHagTagUser.typeRelate} currentUserId = {currentPage?._id}/>:""}
        <EditorsPicks skillRelateGig = {jobHagTagUser?.jobRelateList} currentUserId = {currentPage?._id}/>
      </Suspense>
    </div>
  );
}
