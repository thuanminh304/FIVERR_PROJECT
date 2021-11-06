import callApi from "utils/callApi";

const jobApi = {
  getMainJob() {
    return callApi("api/type-jobs");
  },
  addNewMainJob(data) {
    return callApi("api/type-jobs", "POST", data, "token");
  },
  updateMainJon(id, data) {
    return callApi(`api/type-jobs/${id}`, "PUT", data, "token");
  },
  deleteMainJob(id) {
    return callApi(`api/type-jobs/${id}`, "DELETE", null, "token");
  },
  addNewSubJobType(data) {
    return callApi("api/sub-type-jobs", "POST", data, "token");
  },
  updateSubJobType(id, data) {
    return callApi(`api/sub-type-jobs/${id}`, "PUT", data, "token");
  },
  deleteSubJobType(id) {
    return callApi(`api/sub-type-jobs/${id}`, "DELETE", null, "token");
  },
  getMainJobList(id) {
    return callApi(`api/jobs/by-type?type=${id}`);
  },
  getSubJobList(id) {
    return callApi(`api/jobs/by-sub-type?subType=${id}`);
  },
  deleteJob(id) {
    return callApi(`api/jobs/${id}`, "DELETE", null, "token");
  },
  getJobDetail(id) {
    return callApi(`api/jobs/${id}`);
  },
  updateJobDetail(id, data) {
    return callApi(`api/jobs/${id}`, "PUT", data, "token");
  },
  updateJobImage(id, data) {
    return callApi(`api/jobs/upload-image/${id}`, "POST", data, "token");
  },

  //
  getDetailTypeMainjob(id) {
    return callApi(`api/type-jobs/${id}`);
  },
  createNewJobByUser(formData) {
    return callApi("api/jobs","POST", formData);
  },
};

export default jobApi;
