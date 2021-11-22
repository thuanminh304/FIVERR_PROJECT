const HagtagFunc = (user, jobData) => {
  let typeRelate = [];
  if (user.bookingJob.length > 0) {
    const typeJob = jobData.find((job) => {
      return job._id === user.bookingJob[0];
    });
    if (!!typeJob?._id) {
      const typeJobRelate = jobData.filter((job) => {
        return job.type?._id === typeJob.type._id;
      });
      if (typeJobRelate?.length > 0) {
        typeRelate = [...typeJobRelate];
      }
    }
  } else {
    const typeJob = jobData.find((job) => {
      return job.userCreated === user._id;
    });
    if (!!typeJob?._id) {
      const typeJobRelate = jobData.filter((job) => {
        return job.type?._id === typeJob.type._id;
      });
      if (typeJobRelate?.length > 0) {
        typeRelate = [...typeJobRelate];
      }
    }
  };
  const {skill} = user;
  let jobRelateList = [];
  for(let val of skill){
    const listKeyFind = jobData.filter(job=>{
        return job?.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });
    if(listKeyFind.length > 0){
        jobRelateList = jobRelateList.concat(listKeyFind);
        jobRelateList = [...new Set(jobRelateList)];
    }
  }
  const firstNum = Math.floor(Math.random() * 15) + 1;
  const lastNum = Math.floor(Math.random() * 15) + 20;
  if(jobRelateList.length<16 && jobRelateList.length > 0 && typeRelate.length > 0){
    jobRelateList = jobRelateList.concat(typeRelate);
    jobRelateList = [...new Set(jobRelateList)];
  }
  else if(jobRelateList.length === 0 || typeRelate.length === 0){
    jobRelateList = jobRelateList.concat(jobData.slice(firstNum,lastNum));
  }
  return {typeRelate: typeRelate,jobRelateList: jobRelateList};
};
export default HagtagFunc;
