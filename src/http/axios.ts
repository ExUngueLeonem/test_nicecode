import axios from "axios";

const axiosInstance = axios.create();
// axiosInstance.defaults.baseURL = "http://localhost:3001";
axiosInstance.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

export default axiosInstance;