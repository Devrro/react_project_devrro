import axios from "axios";
import baseURL from "../constants/urls";

const axiosInstance = axios.create({baseURL})

export default axiosInstance;
