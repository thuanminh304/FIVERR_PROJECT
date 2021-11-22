function User(id, avatar, name, email, skill, jobBookingQty, jobBookinglist, jobCreatedQty, jobBookedList, jobBooked, wallet, payfee) {
  this.userId = id;
  this.avatar = avatar;
  this.name = name;
  this.email = email;
  this.skill = skill;
  this.jobBookingQty = jobBookingQty;
  this.jobBookinglist = jobBookinglist
  this.jobCreatedQty = jobCreatedQty;
  this.jobBookedList = jobBookedList;
  this.jobBooked = jobBooked;
  this.wallet = wallet;
  this.payfee = payfee;
}
export const RevertUser = (data, jobList,jobBookList) => {
  const Arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].role === "CLIENT") {
      const userId = data[i]._id;
      const jobBookinglist = data[i].bookingJob;
      const bookingJobQty = jobBookinglist.length;
      const skill = data[i].skill;
      const name = data[i].name;
      const email = data[i].email;
      const avatar = data[i].avatar;
      let wallet = 0;
      let payfee = 0;
      if (bookingJobQty !== 0) {
        for(let jobId of data[i].bookingJob){
          const priceJob = jobList.find((job) => {
            return job._id === jobId;
          });
          if (!!priceJob) {
            payfee += priceJob.price;
          };
        }
      };
      const jobCreatedlist = jobList.filter(job=>{
        return job.userCreated === userId;
      });
      const jobCreatedQty = jobCreatedlist.length;
      let jobBooked = 0;
      let jobBookedList = [];
      if(jobCreatedlist.length>0){
        for(let key in jobCreatedlist){
          const priceJob = jobBookList.filter((job) => {
            return job === jobCreatedlist[key]._id;
          });
          if (priceJob.length>0) {
            jobBookedList = jobBookedList.concat(priceJob);
            jobBooked += priceJob.length;
            wallet += Math.round(jobCreatedlist[key].price*0.8*priceJob.length*Math.pow(10,1))/Math.pow(10,1);
          };
        }
      }
      const userData = new User(
        userId,
        avatar,
        name,
        email,
        skill,
        bookingJobQty,
        jobBookinglist,
        jobCreatedQty,
        jobBookedList,
        jobBooked,
        !wallet ? 0 : wallet,
        !payfee ? 0 : payfee
      );
      Arr.push(userData);
    }
  }
  return Arr;
};
