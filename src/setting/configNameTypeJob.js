const configName = (name) => {
  if (name?.search("&") !== -1) {
    return name?.replace(" & ", "-").toLowerCase();
  } else {
    return name?.replace(" ", "-").toLowerCase();
  }
};

export default configName;
