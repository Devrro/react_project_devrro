import carAxiosInstance from "./axios.service";
import {urls} from "../constants";

const carService = {
   getAll: ()=> carAxiosInstance.get(urls.cars),
   create: (car)=> carAxiosInstance.post(`${urls.cars}`, car),
   deleteById: (id)=> carAxiosInstance.delete(`${urls.cars}/${id}`),
   getById: (id)=> carAxiosInstance.get(`${urls.cars}+${id}`),
   updateById:(id,car)=>carAxiosInstance.put(`${urls.cars}/${id}`,car)
}


export default carService
