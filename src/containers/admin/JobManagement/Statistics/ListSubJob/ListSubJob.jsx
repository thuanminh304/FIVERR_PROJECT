import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Form, Input, Button, Space } from "antd";
import {SettingOutlined, DeleteOutlined, AppstoreAddOutlined, CheckCircleOutlined, CloseCircleOutlined} from '@ant-design/icons';
import './ListSubJob.scss';
const Listsubjob = (props) => {
    const [titleMainJob, setTitleMainJob] = useState('');
    const formRef = React.createRef();
    const [isAdd, setIsAddNew] = useState(false);
    const {jobId} = props;
    const { mainJob } = useSelector((state) => state.JobManagementReducer);
    const addNewSubJob = (e) => {
        if(!isAdd){
            setIsAddNew(true);
        }
    }
    const approveAddNew = (e) => {
        console.log('addnew')
    }
    const cancleAddNew = (e) => {
        setIsAddNew(false);
    }
    const onFinish = (values) => {
        const data = {...values, status:true};
    };
    // const addNew = (e) => {
    //     // const approveBtn = e.target.closest('span:nth-of-type(1)');
    //     // const cancleBtn = e.target.closest('span:nth-of-type(2)');
    //     // if(!!cancleBtn){
    //         setIsAdd(false);
    //     //     console.log(isAdd);
    //     // }
    // }
    const renderAddSubJob = () => {
        if(isAdd){
            return (
                <>
                <CheckCircleOutlined onClick={approveAddNew}/>
                <CloseCircleOutlined onClick={cancleAddNew}/>
                </>
            );        
        }
        else{
            return <AppstoreAddOutlined />
        }
    }
    // useEffect(()=>{
    //     setTitleMainJob(mainJob[jobId]?.name);
    // },[])
    // useEffect(()=>{
    //     setTitleMainJob(mainJob[jobId]?.name);
    // },[jobId])
    return (
        <div className='subTypeJob-content'>
            <div className="JobType-title">
                <h4>{mainJob[jobId]?.name}</h4>
                <p>Sub Job's Type</p>
            </div>
            <div className="JobType-list">
                <div className="subJobType-content row">
                    {mainJob[jobId]?.subTypeJobs.map((subJobType,idx)=>{
                        return (
                            <div key={idx} data-id={idx} data-subjobid = {subJobType._id} className="subJobType-item col-md-3">
                                <div className="subJobType__content row">
                                    <div className="subJobType__settingContent">
                                        <SettingOutlined />
                                        <DeleteOutlined />
                                    </div>
                                    <div className="subJobType__title">
                                        {subJobType.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="subJobType-item col-md-3">
                        <div className={"subJobType__content subJobType-add row " + (isAdd?'addnew':'')} onClick={addNewSubJob}>
                        <div className="subJobType__settingContent">
                            {renderAddSubJob()}
                        </div>
                        <div className="subJobType__title">
                            Add new sub job
                            <Form
                                onFinish={onFinish}
                                ref={formRef}
                                autoComplete="off"
                            >
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
                                        if(value){
                                        isDublicate = mainJob.findIndex(job=>{
                                            return job.name.toLowerCase() === value.toLowerCase();
                                        });
                                        }
                                        if (!value || isDublicate === -1) {
                                        return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Job type is exist!'));
                                    },
                                    }),
                                ]}
                                >
                                <Input />
                                </Form.Item>
                                <Button style={{visibility: 'hidden'}} type="primary" id="submidAddNew" htmlType="submit">
                                Register
                                </Button>
                            </Form>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Listsubjob;
