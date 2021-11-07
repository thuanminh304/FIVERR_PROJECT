const getBase64 = (file,setImageUrl) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", (event) => {
    setImageUrl(event.target.result);
  });
};
export default getBase64;