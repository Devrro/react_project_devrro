import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "../slices/car.slice";


const rootReducer = combineReducers({
    cars:carReducer
});


let carStore = configureStore({
    reducer:rootReducer
});

export default carStore
