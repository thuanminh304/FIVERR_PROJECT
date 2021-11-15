import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RightOutlined, StarFilled, MessageOutlined, LoadingOutlined } from "@ant-design/icons";
import defaultJob from "assets/images/defaultTypeJob/defaultJob.jpg";
import userDefaultAvatar from 'assets/images/defaultAvatar/defaultAvatar.jpg';
import "./JobDetail.scss";
import Comment from "./Comment/Comment";
import { actGetJobDetail } from "Modules/JobManagement/actions";
import { Link, useHistory } from "react-router-dom";
import commentApi from "apis/commentApi";
import jobApi from 'apis/jobApi';
import Loader from "components/Loader/Loader";
const Jobdetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { nameTypeJob, jobId } = useParams();
  const [statusPos, setStatusPos] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isBook, setIsBook] = useState(false);
  const [isBooked, setBooked] = useState('');
  const [isSendCommnet, setIsSendComment] = useState(false);
  const { jobDetail } = useSelector((state) => state.JobManagementReducer);
  const {currentUser} = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    setLoading(true);
    dispatch(actGetJobDetail(jobId));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (jobDetail?._id === jobId) {
      commentApi
        .getComment(jobId)
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          const data = res.data.map(comment => {
            const userCmt = {avatar: null, name: 'Guest'};
            return {...comment, user: userCmt};
          });
          setCommentList(data.reverse());
        })
        .catch((error) => {
          setCommentList([]);
          setLoading(false);
        });
    }
  }, [jobDetail]);
  const handleScroll = () => {
    const content = document.querySelector(".jobdetail");
    const footer = document.querySelector("footer");
    const bookingBox = document.querySelector(".jobDetail__jobPrice");
    const windowY = window.scrollY;
    if(!!content && !!footer && !!bookingBox){
      if (
        windowY >= content?.offsetTop + 65 &&
        windowY < footer.offsetTop - 590
      ) {
        setStatusPos("fix");
        bookingBox.style.transform = `translate3d(-50%, -200px, 0)`;
      } else if (windowY >= footer.offsetTop - 590) {
        setStatusPos("notFix");
        bookingBox.style.transform = `translate3d(0, ${
          footer.offsetTop - 793
        }px, 0)`;
      } else {
        setStatusPos("");
        bookingBox.style.transform = "";
      }
    }

  };
  const createNewComment = (content) => {
    const data = {
      content: content,
      job: jobId,
    };
    setIsSendComment(true);
    if (!!content) {
      commentApi
        .createComment(data)
        .then((res) => {
          const listCmt = [...commentList];
          const userCmt = {avatar: null, name: 'Guest'};
          const newComment = {...res.data, user: userCmt};
          listCmt.unshift(newComment);
          setCommentList(listCmt);
          setIsSendComment(false);
        })
        .catch((error) => {
          setIsSendComment(false);
        });
    }
  };
  const bookJob = () => {
    setIsBook(true);
    jobApi.bookingJob(jobId).then(res=>{
      setIsBook(false);
      setBooked('success');
      setTimeout(() => {
        setBooked('');
        history.push(`/user/${jobDetail?.email}`)
      }, 2000);
    })
    .catch(error=>{
      setIsBook(false);
      setBooked('fail');
      setTimeout(() => {
        setBooked('');
      }, 2000);
    })
  }
  if (!!loading) return <Loader />;
  return (
    <div className="jobdetail">
      <div className="jobdetail__content row">
        <div className="jobDetail__item jobDetail__info col-6">
          <div className="categories-link">
            <span>
              <Link to={`/categories/${nameTypeJob}`}>
                {jobDetail?.type?.name}
              </Link>
            </span>
            <RightOutlined />
            <span>
              <Link
                to={`/categories/${nameTypeJob}/${jobDetail?.subType?._id}`}
              >
                {jobDetail?.subType?.name}
              </Link>
            </span>
          </div>
          <div className="jobDetail__infoMain">
            <div className="info__title">
              <h1>{jobDetail?.name}</h1>
            </div>
            <div className="info__container">
              <div className="info__review">
                <div className="info__rating">
                  <span>{jobDetail?.rating}</span>
                  <StarFilled />
                </div>
                <div className="info__reviewQty">
                  <a href="#review">
                    {commentList.length>0?
                    (<><span>{commentList.length}</span>
                    <MessageOutlined /></>
                    ):
                    (<span>No Comment</span>)
                    }
                  </a>
                </div>
              </div>
            </div>

            <div className="jobDetail__infoImage">
              {!!jobDetail?.image ? (
                <img
                  src={jobDetail.image}
                  alt="job-image"
                  onError={(e) => (
                    (e.target.onerror = null), (e.target.src = { defaultJob })
                  )}
                />
              ) : (
                <img src={defaultJob} alt="job-default" />
              )}
            </div>
          </div>
        </div>
        <div className="jobDetail__item jobDetail__book col-6">
          <div className={"jobDetail__jobPrice " + statusPos}>
            <div className="jobPrice__title">Service Package</div>
            <div className="jobPrice__listService jobPrice__item">
              {!!jobDetail?.proServices ? <span>Pro Service</span> : ""}
              {!!jobDetail?.localSellers ? <span>Local Seller</span> : ""}
              {!!jobDetail?.onlineSellers ? <span>Online Seller</span> : ""}
            </div>
            <div className="jobPrice__price jobPrice__item">
              <span>Full Package Price:</span>
              <span>{`US$${jobDetail?.price}`}</span>
            </div>
            <p className="jobPrice__slogan jobPrice__item">
              {`You will get a professional custom ${jobDetail?.type.name.toLowerCase()} suitable for your project`}
            </p>
            <div className="jobPrice__booking jobPrice__item">
              <button className="bookingBtn" onClick={bookJob}>{!isBook?"Confirm & Pay":<LoadingOutlined />}</button>
            </div>
            <div className="jobPrice__contact jobPrice__item">
              <button className="bookingBtn">
                <a href={`mailto:${jobDetail?.userEmail}?subject=Request: ${jobDetail?.name} &body=Dear Sir/Madam,%0D%0AYour project are interesting. I want to discuss with you about them`}>
                  Contact Seller via Email
                </a>
              </button>
            </div>
            <div className={"jobBook__note " + ((!!isBooked||!currentUser?._id)?'show':"")}>
              {isBooked === 'success'?(<h4 className="noteSuccess note">Success</h4>):""}
              {isBooked === 'fail'?(<h4 className="noteFail note">Fail</h4>):""}
              {!currentUser?._id?(<button className="noteLogin"><Link to="/login">Login Now</Link></button>):""}
            </div>
          </div>
        </div>
        <div id="review" className="jobDetail__item jobDetail__comment col-6">
          <Comment commentList={commentList} isSendCommnet={isSendCommnet} creatComment={createNewComment} currentUser = {currentUser}/>
        </div>
      </div>
    </div>
  );
};

export default Jobdetail;
