import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Select, Switch, Form } from "antd";
import "./Filter.scss";
const { Option } = Select;

const Filter = (props) => {
    const [isProServices, setProServicesChecked] = useState(false);
    const [isLocalSellers, setLocalSellersChecked] = useState(false);
    const [isOnlineSellers, setOnlineSellersChecked] = useState(false);
    const [defaultVal, setDefaultValue] = useState('All');
    const {mainJob} = useSelector(state=>state.JobManagementReducer);
    const {params} = props;
    const selectRef = React.createRef();
    const proSerRef = React.createRef();
    const localRef = React.createRef();
    const onlineRef = React.createRef();
  const onChangeSelect = (value) => {
    console.log(`selected ${value}`);
  }
  const onChangeSwitch = (checked, event) => {
    const proServicesBtn = event.target.closest("#proServices");
    const localSellerBtn = event.target.closest("#localSellers");
    const onlineSellerBtn = event.target.closest("#onlineSellers");
    if (!!proServicesBtn) {
      setProServicesChecked(!isProServices);
    }
    if(!!localSellerBtn){
      setLocalSellersChecked(!isLocalSellers);   
    }
    if(!!onlineSellerBtn){
      setOnlineSellersChecked(!isOnlineSellers);
    }

  };
  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {
    console.log("focus");
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };
  const selectList = mainJob?.find(job=>{
    return job._id == params;
  })?.subTypeJobs;
  useEffect(() => {
    setDefaultValue('All');
    selectRef.current.resetFields();
    setProServicesChecked(false);
    setLocalSellersChecked(false);
    setOnlineSellersChecked(false);
  },[params])
  return (
    <div className="mainJobList-filter">
      <div className="jobList-filter__content">
        <div className="jobList-filter__subJobList jobList-filter__item">
          <div className="jobList-filter__itemTitle">
            <p>Sub Job Lists:</p>
          </div>
          <div className="jobList-filter__itemFeature">
            <Form ref={selectRef} initialValues={{subJobs: 'All',}}>
              <Form.Item name="subJobs" >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select Sub Jobs"
                  optionFilterProp="children"
                  onChange={onChangeSelect}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  // defaultValue={defaultVal}
                >
                  <Option defaultValue value="All">All</Option>
                  {selectList?.map((list,idx)=>{
                    return <Option key={idx} value={list._id}>{list.name}</Option>
                  })}
                </Select>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="jobList-filter__item">
          <div className="jobList-filter__item jobList-filter__itemSub">
            <div className="jobList-filter__itemTitle">
              <p>proServices</p>
            </div>
            <div className="jobList-filter__itemFeature">
              <Form ref={proSerRef}>
                <Form.Item name="proServices">
                <Switch
                  size="small"
                  id="proServices"
                  defaultChecked={isProServices}
                  checked={isProServices}
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
              <Form ref={localRef}>
                <Form.Item name="localSellers">
                <Switch
                  size="small"
                  id="localSellers"
                  defaultChecked={isLocalSellers}
                  checked={isLocalSellers}
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
            <Form ref={onlineRef}>
                <Form.Item name="onlineSellers">
              <Switch
                size="small"
                id="onlineSellers"
                defaultChecked={isOnlineSellers}
                checked={isOnlineSellers}
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
