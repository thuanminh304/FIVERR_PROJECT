import React, { useState } from "react";
import Slider from "react-slick";
import "./review.scss";
import ReactPlayer from "react-player";
import { Modal } from "react-responsive-modal";
export default function Review() {
  const [open, setOpen] = useState({
    open1: false,
    open2: false,
    open3: false,
    open4: false,
  });

  const onOpenModal1 = () => setOpen({ ...open, open1: true });
  const onOpenModal2 = () => setOpen({ ...open, open2: true });
  const onOpenModal3 = () => setOpen({ ...open, open3: true });
  const onOpenModal4 = () => setOpen({ ...open, open4: true });

  const onCloseModal = () => {
    setOpen(false);
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="fiverrReview py-5">
      <div className="fiverrReview__container container slick-single  px-0">
        <Slider {...settings}>
          <div className="fiverrReview__content">
            <div className="fiverrReview__video py-3">
              <div className="fiverrReview__img ">
                <img
                  className="img-fluid"
                  src="images/imagesHomeNoLogin/review/testimonial-video-still-rooted.jpg"
                  alt=""
                />
              </div>
              <Modal
                className="modal-video-mp4"
                open={open.open1}
                onClose={onCloseModal}
                center
              >
                <ReactPlayer
                  controls={true}
                  playing={false}
                  url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                />
              </Modal>
              <a onClick={onOpenModal1}>
                <div className="fiverrReview__btnPlay">
                  <i className="fa fa-play" />
                </div>
              </a>
            </div>
            <div className="fiverrReview__box">
              <h5>
                Kay Kim, Co-Founder
                <span>
                  <img src="images/imagesHomeNoLogin/review/rooted-logo-x2.321d79d.png" alt="" />
                </span>
              </h5>
              <p>
                <i>
                  "It's extremely exciting that Fiverr has freelancers from all
                  over the world — it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleeping, someone's
                  working."
                </i>
              </p>
            </div>
          </div>
          <div className="fiverrReview__content">
            <div className="fiverrReview__video py-3">
              <div className="fiverrReview__img ">
                <img
                  className="img-fluid"
                  src="images/imagesHomeNoLogin/review/testimonial-video-still-naadam.jpg"
                  alt=""
                />
              </div>
              <Modal
                className="modal-video-mp4"
                open={open.open2}
                onClose={onCloseModal}
                center
              >
                <ReactPlayer
                  controls={true}
                  playing={false}
                  url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl"
                />
              </Modal>
              <a onClick={onOpenModal2}>
                <div className="fiverrReview__btnPlay">
                  <i className="fa fa-play" />
                </div>
              </a>
            </div>
            <div className="fiverrReview__box">
              <h5>
                Caitlin Tormey, Chief Commercial Officer
                <span>
                  <img src="./images/imagesHomeNoLogin/review/naadam-logo-x2.0a3b198.png" alt="" />
                </span>
              </h5>
              <p>
                <i>
                  "We've used Fiverr for Shopify web development, graphic
                  design, and backend web development. Working with Fiverr makes
                  my job a little easier every day."
                </i>
              </p>
            </div>
          </div>
          <div className="fiverrReview__content ">
            <div className="fiverrReview__video py-3">
              <div className="fiverrReview__img ">
                <img
                  className="img-fluid"
                  src="./images/imagesHomeNoLogin/review/testimonial-video-still-lavender.jpg"
                  alt=""
                />
              </div>
              <Modal
                className="modal-video-mp4"
                open={open.open3}
                onClose={onCloseModal}
                center
              >
                <ReactPlayer
                  controls={true}
                  playing={false}
                  url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi"
                />
              </Modal>
              <a onClick={onOpenModal3}>
                <div className="fiverrReview__btnPlay">
                  <i className="fa fa-play" />
                </div>
              </a>
            </div>
            <div className="fiverrReview__box">
              <h5>
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span>
                  <img src="./images/imagesHomeNoLogin/review/lavender-logo-x2.89c5e2e.png" alt="" />
                </span>
              </h5>
              <p>
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </p>
            </div>
          </div>
          <div className="fiverrReview__content ">
            <div className="fiverrReview__video py-3">
              <div className="fiverrReview__img ">
                <img
                  className="img-fluid"
                  src="./images/imagesHomeNoLogin/review/testimonial-video-still-haerfest.jpg"
                  alt=""
                />
              </div>
              <Modal
                className="modal-video-mp4"
                open={open.open4}
                onClose={onCloseModal}
                center
              >
                <ReactPlayer
                  controls={true}
                  playing={false}
                  url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun"
                />
              </Modal>
              <a onClick={onOpenModal4}>
                <div className="fiverrReview__btnPlay">
                  <i className="fa fa-play" />
                </div>
              </a>
            </div>
            <div className="fiverrReview__box">
              <h5>
                Tim and Dan Joo, Co-Founders
                <span>
                  <img src="./images/imagesHomeNoLogin/review/haerfest-logo-x2.03fa5c5.png" alt="" />
                </span>
              </h5>
              <p>
                <i>
                  "When you want to create a business bigger than yourself, you
                  need a lot of help. That's what Fiverr does."
                </i>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
