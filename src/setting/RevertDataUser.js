function User(id, avatar, name, email, skill, jobBookingQty, wallet) {
  this.userId = id;
  this.avatar = avatar;
  this.name = name;
  this.email = email;
  this.skill = skill;
  this.jobBookingQty = jobBookingQty;
  this.wallet = wallet;
}
export const RevertUser = (data, jobList) => {
  const Arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].role === "CLIENT") {
      const userId = data[i]._id;
      const bookingJobQty = data[i].bookingJob.length;
      const skill = data[i].skill;
      const name = data[i].name;
      const email = data[i].email;
      const avatar = data[i].avatar;
      let wallet = 0;
      if (bookingJobQty !== 0) {
        wallet = data[i].bookingJob.reduce((totalCoin, jobId) => {
          const priceJob = jobList.find((job) => {
            return job._id === jobId;
          });
          if (!!priceJob) {
            return totalCoin + priceJob.price * 0.8;
          }
        }, 0);
      }
      const userData = new User(
        userId,
        avatar,
        name,
        email,
        skill,
        bookingJobQty,
        !wallet ? 0 : wallet
      );
      Arr.push(userData);
    }
  }
  Arr.sort((user1, user2) => {
    return user2.wallet - user1.wallet;
  });
  return Arr;
};
