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
}

export default jobApi;