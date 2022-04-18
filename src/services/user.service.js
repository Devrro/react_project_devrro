import axiosInstance from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: axiosInstance.get(urls.users)
}

export default userService;