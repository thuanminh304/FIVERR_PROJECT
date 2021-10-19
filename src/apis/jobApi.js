import callApi from "utils/callApi";

const jobApi = {
    getJob(){
        return callApi('api/jobs');
    }
}