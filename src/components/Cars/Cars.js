import React, {useEffect} from 'react';
import Car from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices";
import style from './cars.module.css'

const Cars = () => {
    const {cars,status} = useSelector(state => state.cars)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])
    return (
        <div className={style.list_cars}>
            {status&&<h1>{status}</h1>}
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;