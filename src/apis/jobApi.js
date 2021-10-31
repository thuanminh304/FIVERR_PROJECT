import callApi from "utils/callApi";

const jobApi = {
    getMainJob(){
        return callApi('api/type-jobs');
    },
    addNewMainJob(data){
        return callApi('api/type-jobs','POST',data,'token');
    },
    updateMainJon(id,data){
        return callApi(`api/type-jobs/${id}`,"PUT",data,'token');
    },
    deleteMainJob(id){
        return callApi(`api/type-jobs/${id}`,"DELETE",null,'token');
    },
    addNewSubJobType(data){
        return callApi('api/sub-type-jobs','POST',data,'token');
    },
    updateSubJobType(id,data){
        return callApi(`api/sub-type-jobs/${id}`, 'PUT',data,'token');
    },
    deleteSubJobType(id){
        return callApi(`api/sub-type-jobs/${id}`,"DELETE",null,'token');
    },
    getMainJobList(id){
        return callApi(`api/jobs/by-type?type=${id}`);
    },
    getSubJobList(id){
        return callApi(`api/jobs/by-sub-type?subType=${id}`);
    },
}

export default jobApi;