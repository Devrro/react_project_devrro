import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices";
import style from './car.module.css'

const Car = ({car: {id, model, year, price}}) => {
    const dispatch = useDispatch();

    const deleteCar=()=>{
        dispatch(carActions.deleteById({id}))
    }
    return (
        <div className={style.car_body}>
            <div className={style.car_body}>
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
                <button onClick={deleteCar}>DELETE</button>
                <button onClick={() => {dispatch(carActions.updateCarById({id}))}}>UPDATE</button>
            </div>
        </div>
    );
};

export default Car;