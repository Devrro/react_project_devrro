import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices";
import style from './car.module.css'
import {Link, useParams} from "react-router-dom";

const Car = ({car, car: {id, model, year, price}}) => {
    const dispatch = useDispatch();

    const deleteCar=()=>{
        dispatch(carActions.deleteById({id}))
    }

    return (
        <div className={style.car_body}>
            <div className={style.car_style}>
                <div>
                    ID - {id}
                </div>
                <div>
                    CAR MODEL - {model}
                </div>
                <div>
                    YEAR OF PRODUCTION - {year}
                </div>
                <div>
                    PRICE : {price}
                </div>

            </div>
            <div className={style.buttons}>
                <Link to={id.toString()}><button className={style.car_button}>INFO</button></Link>
                <button className={style.car_button} onClick={deleteCar}>DELETE</button>
                <button className={style.car_button} onClick={() => {dispatch(carActions.setCarForUpdate({car}))}}>UPDATE</button>
            </div>
        </div>
    );
};

export default Car;