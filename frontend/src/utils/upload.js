import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "lancer");
  if(!file){
    return null
  }
  try {
    const res = await axios.post('https://api.cloudinary.com/v1_1/dne8jcikq/image/upload', data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
    return null
  }
};

export default upload;
