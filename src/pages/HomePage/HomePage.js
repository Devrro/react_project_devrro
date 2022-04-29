import React from 'react';
import Cars from "../../components/Cars/Cars";
import CarForm from "../../components/CarForm/CarForm";
import style from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <CarForm>CAR FORM</CarForm>
            <Cars/>
        </div>
    );
};

export default HomePage;