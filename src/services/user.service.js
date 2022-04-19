import axiosInstance from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll:()=> axiosInstance.get(urls.users),
    getById:(id)=> axiosInstance.get(`${urls.users}/${id}`),

}

export default userService;