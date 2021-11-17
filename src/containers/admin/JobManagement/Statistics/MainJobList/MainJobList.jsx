import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { Form, Input, Button } from "antd";
import "./MainJobList.scss";
import {
  actAddNewMainJob,
  actUpdateMainJob,
  actDeleteMainJob,
} from "Modules/JobManagement/actions";
const Mainjoblist = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  const { setCurrentMainJobTypeID } = props;
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [currentJobType, setCurrentJobType] = useState(0);
  const [isAdd, setAdd] = useState(false);
  const [editState, setEditState] = useState(null);
  const formRef = React.createRef();

  const showFormAddFunc = () => {
    setAdd(true);
  };
  const onFinish = (values) => {
    const data = { ...values, status: true };
    dispatch(actAddNewMainJob(data));
  };
  const addNewJob = () => {
    document.querySelector("#submidAddNew").click();
  };
  const cancleAddJob = () => {
    formRef.current.resetFields();
    setAdd(false);
  };
  const editMainType = (e) => {
    const key = e.target.closest(".tabMainJob").dataset.key;
    const jobId = e.target.closest(".tabMainJob").dataset.idjob;
    const tabMainJob = document.querySelectorAll(".tabMainJob");
    const contentTab = tabMainJob[key].querySelector(".tabMainJob__title p");
    const prevContent = contentTab.innerText;
    contentTab.setAttribute("contentEditable", true);
    contentTab.focus();
    let edit = {
      key: null,
      idJob: "",
      prevContent: "",
    };
    edit.key = key;
    edit.idJob = jobId;
    edit.prevContent = prevContent;
    setEditing(true);
    setEditState(edit);
  };
  const updateMainType = (e) => {
    const tabMainJob = document.querySelectorAll(".tabMainJob");
    const contentTab = tabMainJob[editState.key].querySelector(
      ".tabMainJob__title p"
    );
    const jobTab =
      tabMainJob[editState.key].querySelector(".tabMainJob__title");
    if (contentTab.innerHTML === "") {
      jobTab.classList.add("error");
      contentTab.focus();
    } else {
      jobTab.classList.remove("error");
      contentTab.setAttribute("contentEditable", false);
      const data = {
        ...mainJob.find((job) => {
          return job._id === editState.idJob;
        }),
      };
      data.name = contentTab.innerText;
      delete data.__v;
      delete data._id;
      delete data.deleteAt;
      if (data.name !== editState.prevContent) {
        dispatch(actUpdateMainJob(editState.idJob, data));
      }
      setEditing(false);
      setEditState(null);
    }
  };
  const exitEdit = () => {
    const tabMainJob = document.querySelectorAll(".tabMainJob");
    const contentTab = tabMainJob[editState.key].querySelector(
      ".tabMainJob__title p"
    );
    const jobTab =
      tabMainJob[editState.key].querySelector(".tabMainJob__title");
    jobTab.classList.remove("error");
    contentTab.setAttribute("contentEditable", false);
    contentTab.innerHTML = editState.prevContent;
    setEditing(false);
    setEditState(null);
  };
  const deleteMainType = (e) => {
    const key = e.target.closest(".tabMainJob").dataset.key;
    const jobId = e.target.closest(".tabMainJob").dataset.idjob;
    const tabMainJob = document.querySelectorAll(".tabMainJob");
    const jobTab = tabMainJob[key].querySelector(".tabMainJob__title");
    jobTab.classList.add("promptNote");
    let edit = {
      key: null,
      idJob: "",
      prevContent: "",
    };
    edit.key = key;
    edit.idJob = jobId;
    setEditState(edit);
  };
  const deleteMainJob = (e) => {
    e.stopPropagation();
    const deleteBtn = e.target.closest(".prompNote.delete");
    if (!!deleteBtn) {
      dispatch(actDeleteMainJob(editState.idJob));
    }
    const tabMainJob = document.querySelectorAll(".tabMainJob");
    const jobTab =
      tabMainJob[editState.key].querySelector(".tabMainJob__title");
    jobTab.classList.remove("promptNote");
    setEditState(null);
  };
  const choseSubJobType = (e) => {
    const key = e.target.closest(".tabMainJob").dataset.key;
    setCurrentJobType(key);
    setCurrentMainJobTypeID(key);
  };
  const { mainJob } = useSelector((state) => state.JobManagementReducer);
  useEffect(() => {
    formRef.current.resetFields();
  }, [mainJob]);
  useEffect(() => {
    setCurrentMainJobTypeID(currentJobType);
  }, []);
  return (
    <div className="mainjob-List__content">
      <div className={"manjob-List__addNew " + (isAdd ? "show" : "")}>
        <button className="typeJobAdd" onClick={showFormAddFunc}>
          Add new type job
        </button>
        <div className={"newJob__context " + (isAdd ? "show" : "")}>
          <Form onFinish={onFinish} ref={formRef} autoComplete="off">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input name job type!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    let isDublicate = -1;
                    if (value) {
                      isDublicate = mainJob.findIndex((job) => {
                        return job.name.toLowerCase() === value.toLowerCase();
                      });
                    }
                    if (!value || isDublicate === -1) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Job type is exist!"));
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
            <Button
              style={{ visibility: "hidden" }}
              type="primary"
              id="submidAddNew"
              htmlType="submit"
            >
              Register
            </Button>
          </Form>
          <div className="newJob__action">
            <button
              className="typeJobAdd tyJobAddBtn"
              type="submit"
              onClick={addNewJob}
            >
              Add
            </button>
            <button className="typeJobAdd typeJobCancle" onClick={cancleAddJob}>
              Cancle
            </button>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {mainJob.map((job, idx) => {
          return (
            <div
              key={idx}
              className={
                "tabMainJob " +
                (!editState || editState?.key == idx ? "" : "editAfter")
              }
              data-key={idx}
              data-idjob={job._id}
            >
              <div
                className={
                  "tabMainJob__title " + (currentJobType === idx ? "active" : "")
                }
                onClick={choseSubJobType}
              >
                <p suppressContentEditableWarning={true}>{job.name}</p>
                <div className="tabMainJob__overLay">
                  <button className="prompNote delete" onClick={deleteMainJob}>
                    Yes
                  </button>
                  <button
                    className="prompNote noDelete"
                    onClick={deleteMainJob}
                  >
                    No
                  </button>
                </div>
              </div>
              <div className="tabMainJob__editting">
                <div
                  className="editing__item editBtn"
                  onClick={editing ? updateMainType : editMainType}
                >
                  {editing ? "Save" : "Edit"}
                </div>
                <div
                  className="editing__item deleteBtn"
                  onClick={editing ? exitEdit : deleteMainType}
                >
                  {editing ? "Cancle" : "Delete"}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Mainjoblist;
