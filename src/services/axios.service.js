import axios from "axios";
import baseURL from "../constants/urls";

const carAxiosInstance = axios.create({baseURL})

export default carAxiosInstance;
