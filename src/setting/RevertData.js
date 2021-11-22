function TypeJob(
  typeId,
  type,
  jobQty,
  proServiceQty,
  LocalSellerQty,
  onlineSellerQty,
  price
) {
  this.typeId = typeId;
  this.type = type;
  this.jobQty = jobQty;
  this.proServiceQty = proServiceQty;
  this.localSellerQty = LocalSellerQty;
  this.onlineSellerQty = onlineSellerQty;
  this.price = price;
}
export const RevertData = (data,jobBookList) => {
  const Arr = [];
    for (let i = 0; i < data.length; i++) {
      if (!!data[i].type) {
        const jobTypeId = data[i].type?._id;
        const typeIndex = Arr.findIndex((job) => {
          return job.typeId === jobTypeId;
        });
        if (typeIndex !== -1) {
          continue;
        } else {
          const jobList = data.filter((job) => {
            return job.type?._id === jobTypeId;
          });
          const proServiceJob = jobList.filter((job) => {
            return job.proServices === true;
          });
          const localSeller = jobList.filter((job) => {
            return job.localSellers === true;
          });
          const onlineSeller = jobList.filter((job) => {
            return job.onlineSellers === true;
          });
          let totalPrice = 0;
          for(let key in jobList){
            const jobBook = jobBookList.filter(job=>{
              return job === jobList[key]._id;
            });
            if(jobBook.length > 0){
              totalPrice += jobList[key].price*0.2*jobBook.length;
            };
          }
          const type = data[i].type?.name;
          const jobQty = jobList.length;
          const proServicesQty = proServiceJob.length;
          const localSellerQty = localSeller.length;
          const onlineSellerQty = onlineSeller.length;
          const typeJob = new TypeJob(
            jobTypeId,
            type,
            jobQty,
            proServicesQty,
            localSellerQty,
            onlineSellerQty,
            !totalPrice ? 0 : Math.round(totalPrice*Math.pow(10,1))/Math.pow(10,1),
          );
          Arr.push(typeJob);
        }
      }
  }
  Arr.sort((job1,job2)=>{
    const arr = job2.price-job1.price;
    if(arr !== 0){
      return arr;
    };
    return job2.jobQty-job1.jobQty;
  });
  return Arr;
};
