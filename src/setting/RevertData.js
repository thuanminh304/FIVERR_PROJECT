function TypeJob(
  typeId,
  type,
  jobQty,
  proServiceQty,
  LocalSellerQty,
  onlineSellerQty,
  deliveryTimeQty,
  price
) {
  this.typeId = typeId;
  this.type = type;
  this.jobQty = jobQty;
  this.proServiceQty = proServiceQty;
  this.localSellerQty = LocalSellerQty;
  this.onlineSellerQty = onlineSellerQty;
  this.deliveryTimeQty = deliveryTimeQty;
  this.price = price;
}
export const RevertData = (data) => {
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
          const deliveryTime = jobList.filter((job) => {
            return job.deliveryTime === true;
          });
          const totalPrice = deliveryTime.reduce((accu, current) => {
              return accu + (current.price*0.2);
          },0);
          const type = data[i].type?.name;
          const jobQty = jobList.length;
          const proServicesQty = proServiceJob.length;
          const localSellerQty = localSeller.length;
          const onlineSellerQty = onlineSeller.length;
          const deliveryTimeQtu = deliveryTime.length;
          const typeJob = new TypeJob(
            jobTypeId,
            type,
            jobQty,
            proServicesQty,
            localSellerQty,
            onlineSellerQty,
            deliveryTimeQtu,
            !totalPrice ? 0 : totalPrice
          );
          Arr.push(typeJob);
        }
      }
  }
  Arr.sort((job1,job2)=>job2.price-job1.price);
  return Arr;
};
