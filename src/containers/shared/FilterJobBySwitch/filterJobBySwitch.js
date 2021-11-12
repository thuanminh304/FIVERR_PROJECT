export const dataSwitch = {
  proSer(listData) {
    return listData?.filter((job) => job.proServices === true);
  },
  localSel(listData) {
    return listData?.filter((job) => job.localSellers === true);
  },
  onlSel(listData) {
    return listData?.filter((job) => job.onlineSellers === true);
  },
  proLocal(listData) {
    return listData?.filter(
      (job) => job.proServices === true && job.localSellers === true
    );
  },
  proOnl(listData) {
    return listData?.filter(
      (job) => job.proServices === true && job.onlineSellers === true
    );
  },
  localOnl(listData) {
    return listData?.filter(
      (job) => job.onlineSellers === true && job.localSellers === true
    );
  },
  all(listData) {
    return listData?.filter(
      (job) =>
        job.onlineSellers === true &&
        job.localSellers === true &&
        job.proServices === true
    );
  },
};

export const filterSwitch = (
  switchOnl,
  switchPro,
  switchLocal,
  listJobsByName,
  all,
  proOnl,
  localOnl,
  proLocal,
  proSer,
  localSel,
  onlSel
) => {
  if (
    switchOnl.name !== "" &&
    switchOnl.value &&
    switchPro.name !== "" &&
    switchPro.value &&
    switchLocal.name !== "" &&
    switchLocal.value
  ) {
    return (listJobsByName = all);
  } else if (
    switchOnl.name !== "" &&
    switchOnl.value &&
    switchPro.name !== "" &&
    switchPro.value
  ) {
    return (listJobsByName = proOnl);
  } else if (
    switchOnl.name !== "" &&
    switchOnl.value &&
    switchLocal.name !== "" &&
    switchLocal.value
  ) {
    return (listJobsByName = localOnl);
  } else if (
    switchPro.name !== "" &&
    switchPro.value &&
    switchLocal.name !== "" &&
    switchLocal.value
  ) {
    return (listJobsByName = proLocal);
  } else if (switchPro.name !== "" && switchPro.value) {
    return (listJobsByName = proSer);
  } else if (switchLocal.name !== "" && switchLocal.value) {
    return (listJobsByName = localSel);
  } else if (switchOnl.name !== "" && switchOnl.value) {
    return (listJobsByName = onlSel);
  } else if (listJobsByName !== null) {
    return listJobsByName;
  }

  return listJobsByName;
};
