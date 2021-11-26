import React, { useState } from "react";
import "./video.scss";
import ReactPlayer from "react-player";
import { Modal } from "react-responsive-modal";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function Video() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <section className="video">
      <div className="video__content">
        <div className="video__text">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <ul>
            <li>
              <CheckCircleOutlined className="btn-checkcircle" />
              <span>The best for every budget</span>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>
            <li>
              <CheckCircleOutlined className="btn-checkcircle" />
              <span>Quality work done quickly</span>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>
            <li>
              <CheckCircleOutlined className="btn-checkcircle" />

              <span>Protected payments, every time</span>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </li>
            <li>
              <CheckCircleOutlined className="btn-checkcircle" />

              <span>24/7 support</span>
              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
        <div className="video__vd">
          <img src="images/imagesHomeNoLogin/video/selling-proposition-still-1400-x1.png" alt="" />

          <a onClick={onOpenModal}>
            <img
              type="button"
              id="btn-video-fixed"
              src="images/shared-img/desktop-play-button.c1196d6.png"
              alt="#"
            />
          </a>
          <Modal
            className="modal-video-mp4"
            open={open}
            onClose={onCloseModal}
            center
          >
            <ReactPlayer
              controls={true}
              playing={true}
              url={[{ src: "video/video/video.mp4", type: "video/mp4" }]}
            />
          </Modal>
        </div>
      </div>
    </section>
  );
}
