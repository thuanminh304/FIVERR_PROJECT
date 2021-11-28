import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Switch, Form } from "antd";
import "./Filter.scss";
import {
  actLocalSeller,
  actOnlineSellers,
  actProService,
  actSelectSubType,
} from "../Modules/action";
const { Option } = Select;
const Filter = (props) => {
  const { subJob, proService, localSeller, onlineSeller } = useSelector(
    (state) => state.FilterJobListReducer
  );
  const [isShowFilter, setShowFilter] = useState(false);
  const { subType } = props;
  const formRef = React.createRef();
  const dispatch = useDispatch();
  const onChangeSelect = (value) => {
    dispatch(actSelectSubType(value));
  };
  const onChangeSwitch = (checked, event) => {
    const proServicesBtn = event.target.closest("#proServices");
    const localSellerBtn = event.target.closest("#localSellers");
    const onlineSellerBtn = event.target.closest("#onlineSellers");
    if (!!proServicesBtn) {
      dispatch(actProService(checked));
    }
    if (!!localSellerBtn) {
      dispatch(actLocalSeller(checked));
    }
    if (!!onlineSellerBtn) {
      dispatch(actOnlineSellers(checked));
    }
  };
  useEffect(()=>{
    const adminContainer = document.querySelector('.adminContainer');
    const filterTitle = document.querySelector('.jobList-filter__itemTitle p');
    const mainJob = document.querySelector('.mainJob-JobList');
    new ResizeObserver(()=>elementChangeSize(mainJob,filterTitle)).observe(mainJob);
    adminContainer.addEventListener('click',handleClick);
  },[]);
  useEffect(() => {
    formRef.current.setFieldsValue({ subJobs: subJob });
  }, [subJob]);
  const elementChangeSize = (mainJob,filterTitle) => {
    if(mainJob.offsetWidth<730){
      filterTitle.style.display = 'none';
    }
    else{
      filterTitle.style.display = 'block';
    }
  }
  const showFilter = () => {
    setShowFilter(!isShowFilter);
  };
  const handleClick = (e) =>{
    const filterBox = e.target.closest('.jobList-filter__switch');
    if(!filterBox || !!isShowFilter){
      setShowFilter(false);
    };
  };
  return (
    <div className="mainJobList-filter">
      <div className="jobList-filter__content">
        <div className="jobList-filter__subJobList jobList-filter__item">
          <div className="jobList-filter__itemTitle">
            <p>Sub Job Lists:</p>
          </div>
          <div className="jobList-filter__itemFeature">
            <Form ref={formRef}>
              <Form.Item name="subJobs" value={subJob}>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select Sub Jobs"
                  optionFilterProp="children"
                  onChange={onChangeSelect}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="All">All</Option>
                  {subType?.map((list, idx) => {
                    return (
                      <Option key={idx} value={list._id}>
                        {list.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="jobList-filter_btn" onClick={showFilter}>
          Filter Button
        </div>
        <div className={"jobList-filter__item jobList-filter__switch " + (isShowFilter?"show":"")}>
          <div className="jobList-filter__item jobList-filter__itemSub">
            <div className="jobList-filter__itemTitle">
              <p>proServices</p>
            </div>
            <div className="jobList-filter__itemFeature">
              <Form>
                <Form.Item name="proServices">
                  <Switch
                    size="small"
                    id="proServices"
                    checked={proService}
                    onChange={onChangeSwitch}
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="jobList-filter__item jobList-filter__itemSub">
            <div className="jobList-filter__itemTitle">
              <p>localSellers</p>
            </div>
            <div className="jobList-filter__itemFeature">
              <Form>
                <Form.Item name="localSellers">
                  <Switch
                    size="small"
                    id="localSellers"
                    checked={localSeller}
                    onChange={onChangeSwitch}
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="jobList-filter__item jobList-filter__itemSub">
            <div className="jobList-filter__itemTitle">
              <p>onlineSellers</p>
            </div>
            <div className="jobList-filter__itemFeature">
              <Form>
                <Form.Item name="onlineSellers">
                  <Switch
                    size="small"
                    id="onlineSellers"
                    checked={onlineSeller}
                    onChange={onChangeSwitch}
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
