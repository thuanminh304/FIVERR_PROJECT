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
    return callApi(`api/jobs/by-sub-type?subType=${id}&skip=0&llimit=5`);
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
  getAllJob() {
    return callApi(`api/jobs`);
  },
  //
  getDetailTypeMainjob(id) {
    return callApi(`api/type-jobs/${id}`);
  },
  createNewJobByUser(formData) {
    return callApi("api/jobs", "POST", formData);
  },

  getListJobBookedByUser() {
    return callApi("api/jobs/by-user");
  },

  getDetailSubTypeJob(idSubType) {
    return callApi(`api/sub-type-jobs/${idSubType}`);
  },
  getListJobsByName(name) {
    return callApi(`api/jobs/by-name?name=${name}`);
  },
  doneJobBooked(idJob) {
    return callApi(`api/jobs/done/${idJob}`, "PATCH");
  },
  bookingJob(idJob) {
    return callApi(`api/jobs/booking/${idJob}`,"PATCH", null, 'token');
  },
};

export default jobApi;
