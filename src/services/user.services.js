import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const UserServices = {
    getALL: () => axiosInstance.get(urls.users),
    getPosts: () => axiosInstance.get(urls.users),
    getUsersPosts: (id) => axiosInstance.get(`users/${id}/posts`)
}

export {UserServices}