import callApi from "utils/callApi";

const commentApi = {
    getComment(id) {
        return callApi(`api/comments/by-job/${id}`);
    },
    createComment(data) {
        return callApi(`api/comments`,'POST',data,'token');
    }
};

export default commentApi;