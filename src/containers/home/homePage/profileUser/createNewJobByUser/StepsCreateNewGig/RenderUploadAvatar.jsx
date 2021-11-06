import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import jobApi from "apis/jobApi";
import { useSelector } from "react-redux";
export default function RenderUploadAvatar(props) {
  const { currentJob } = useSelector((state) => state.profileUserReducer);
  const [imageUrl, setImageUrl] = useState(null);
  const [current, setCurrent] = props.currentStep;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      job: null,
    },
    onSubmit: (value) => {
      const formData = new FormData();
      formData.append("job", value.job, value.job.name);
      jobApi
        .updateJobImage(currentJob?._id, formData)
        .then((res) => {
            console.log("ok")
          // setTimeout(() => {
          //   setCurrent(current + 1);
          // }, 0);
        })
        .catch((err) => {
          console.log(err?.response);
        });
    },
  });

  const handleChangeAvatar = (event) => {
    let file = event.target.files[0];
    if (file) {
      //
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (event) => {
        setImageUrl(event.target.result);
      });
      formik.setFieldValue("job", file);
      //
    }
  };

  return (
    <div className="render-upload-avatar">
      <h3>Showcase Your Services In A Gig Gallery</h3>
      <p>
        Encourage buyers to choose your Gig by featuring a variety of your work.
      </p>
      <form onSubmitCapture={formik.handleSubmit}>
        <div className="dragger-image">
          <input
            onChange={handleChangeAvatar}
            type="file"
            accept="image/*"
            name="image"
          />
          <img src={imageUrl} alt="" />
        </div>
        <div className="steps-action">
          <button
            className="btn-pre-steps"
            onClick={() => {
              setCurrent(current - 1);
            }}
          >
            Previous
          </button>

          <button type="submit" className="btn-next-steps">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
