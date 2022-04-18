import axiosInstance from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: () => axiosInstance.get(urls.posts),
    getById: (id) => axiosInstance.get(urls.posts +`/${id}`)
}

export default postService;