import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Form, Input, Button } from "antd";
import {SettingOutlined, DeleteOutlined, AppstoreAddOutlined, CheckCircleOutlined, CloseCircleOutlined} from '@ant-design/icons';
import './ListSubJob.scss';
import { actAddNewSubJobType, actDeleteSubJobType, actUpdateSubJob } from 'Modules/JobManagement/actions';

const Listsubjob = (props) => {
    const formRef = React.createRef();
    const [isAdd, setIsAddNew] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editState, setEditState] = useState(null);
    const {jobId} = props;
    const { mainJob,loadingAction, isError} = useSelector((state) => state.JobManagementReducer);
    const dispatch = useDispatch();
    const addNewSubJob = (e) => {
        if(!isAdd){
            setIsAddNew(true);
            document.querySelector('.subJobType__title input').focus();
        }
    }
    const approveAddNew = (e) => {
        document.querySelector('#submidAddSub').click();
    }
    const cancleAddNew = (e) => {
        setIsAddNew(false);
        formRef.current.resetFields();
    }
    const onFinish = (values) => {
        const data = {...values, status:true, typeJob: mainJob[jobId]?._id};
        dispatch(actAddNewSubJobType(data));
    };
    const editFunc = (e) => {
        const subJobTypeBox = document.querySelectorAll('.subJobType-item');
        const key = e.target.closest('.subJobType-item').dataset.key;
        const subJobId = e.target.closest('.subJobType-item').dataset.subjobid;
        const subJobItemSelected = subJobTypeBox[key].querySelector('.subJobType__title');
        const subJobItemEditing = subJobTypeBox[key].querySelector('.subJobType__settingContent');
        const prevContent = subJobItemSelected.innerText;
        subJobItemSelected.setAttribute('contentEditable',true);
        subJobItemSelected.focus();
        subJobItemEditing.classList.add('isEdit');
        let edit = {
            key: null,
            idJob: '',
            prevContent: '',
        };
        edit.key = key;
        edit.idJob = subJobId;
        edit.prevContent = prevContent;
        setEditState(edit)
        setIsEdit(true);
    }
    const deleteFunc = (e) => {
        const subJobTypeBox = document.querySelectorAll('.subJobType-item');
        const key = e.target.closest('.subJobType-item').dataset.key;
        const subJobId = e.target.closest('.subJobType-item').dataset.subjobid;
        const subJobItemSelected = subJobTypeBox[key].querySelector('.subJobType__title');
        const subJobItemEditing = subJobTypeBox[key].querySelector('.subJobType__settingContent');
        subJobItemSelected.classList.add('remove');
        subJobItemEditing.classList.add('isEdit');
        let edit = {
            key: null,
            idJob: '',
            prevContent: '',
        };
        edit.key = key;
        edit.idJob = subJobId;
        setEditState(edit);
        setIsEdit(false);
    }
    const approveSubJob = (e) => {
        const subJobTypeBox = document.querySelectorAll('.subJobType-item');
        const subJobItemSelected = subJobTypeBox[editState.key].querySelector('.subJobType__title');
        const subJobItemEditing = subJobTypeBox[editState.key].querySelector('.subJobType__settingContent');
        const currentContent = subJobItemSelected.innerText;
        if(!!isEdit){
            if(!!currentContent){
                if(currentContent !== editState.prevContent){
                    const data = {name:currentContent,status: true, typeJob: mainJob[jobId]?._id};
                    dispatch(actUpdateSubJob(editState.idJob,data))
                }  
                else{
                    subJobItemSelected.innerHTML = editState.prevContent;
                }
                subJobItemEditing.classList.remove('isEdit');
                subJobItemSelected.classList.remove('error');
                subJobItemSelected.setAttribute('contentEditable',false);
            }
            else{
                subJobItemSelected.classList.add('error');
                subJobItemSelected.focus();
            }
        }
        else{
            dispatch(actDeleteSubJobType(editState.idJob));
            subJobItemEditing.classList.remove('isEdit');
        }
       
    }
    const cancleSubJob = () => {
        const subJobTypeBox = document.querySelectorAll('.subJobType-item');
        const subJobItemSelected = subJobTypeBox[editState.key].querySelector('.subJobType__title');
        const subJobItemEditing = subJobTypeBox[editState.key].querySelector('.subJobType__settingContent');
        if(!!isEdit){
            subJobItemEditing.classList.remove('isEdit');
            subJobItemSelected.classList.remove('error');
            subJobItemSelected.innerHTML = editState.prevContent;
            subJobItemSelected.setAttribute('contentEditable',false);
            setEditState(null);
            setIsEdit(false);
        }
        else{
            subJobItemEditing.classList.remove('isEdit');
            subJobItemSelected.classList.remove('remove');
            setEditState(null);
        }
    }
    const resetValue = () => {
        const subJobTypeBox = document.querySelectorAll('.subJobType-item');
        const subJobItemSelected = subJobTypeBox[editState?.key].querySelector('.subJobType__title');
        subJobItemSelected.innerHTML = editState.prevContent;
    }
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
    useEffect(()=>{
        if(!!isError){
            if(!!isEdit){
                resetValue();
                setEditState(null);
                setIsEdit(false);
            }
            else{
                setEditState(null);
            }
        }
        else{
            setEditState(null);
        }
        cancleAddNew();
    },[loadingAction])
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
                            <div key={idx} data-key={idx} data-subjobid = {subJobType._id} className={"subJobType-item col-md-3 " + (!editState||editState?.key == idx?"":"disabled")}>
                                <div className="subJobType__content row">
                                    <div className="subJobType__settingContent">
                                        <SettingOutlined onClick={editFunc}/>
                                        <DeleteOutlined onClick={deleteFunc}/>
                                        <CheckCircleOutlined onClick = {approveSubJob}/>
                                        <CloseCircleOutlined onClick = {cancleSubJob}/>
                                    </div>
                                    <div className="subJobType__title">
                                        {subJobType.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className={"subJobType-item col-md-3 " + (!editState?"":"disabled")}>
                        <div className={"subJobType__content subJobType-add row " + (isAdd?'addnew':'')} onClick={addNewSubJob}>
                        <div className="subJobType__settingContent">
                            {renderAddSubJob()}
                        </div>
                        <div className="subJobType__title">
                            <p>Add new sub job</p>
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
                                        isDublicate = mainJob[jobId]?.subTypeJobs.findIndex(job=>{
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
                                <Input placeholder="Add new sub job"/>
                                </Form.Item>
                                <Button style={{visibility: 'hidden'}} type="primary" id="submidAddSub" htmlType="submit">
                                    ...
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
