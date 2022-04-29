import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const CarForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const submit = async (newCar) => {
        await dispatch(carActions.create({car: newCar}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>
                    model:
                    <input type={"text"} defaultValue={'AUDI'} {...register('model')}/>
                </label>
            </div>
            <div>
                <label>
                    price:
                    <input type={"text"}  defaultValue={14500} {...register('price')}/>
                </label>
            </div>
            <div>
                <label>
                    year:
                    <input type={"text"}  defaultValue={2019} {...register('year')}/>
                </label>
            </div>
            <button>ADD</button>
            <button onClick={()=>{}}>UPDATE</button>
        </form>
    );
};

export default CarForm;