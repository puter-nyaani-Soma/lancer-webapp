import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:7070/api/",
  withCredentials: true,
});

export default newRequest;
