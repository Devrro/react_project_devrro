import React from 'react';
import style from './MainLayout.module.css'
import {Link,Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={style.header}>
                <Link to={'/home'}>CAR FORM</Link>
                <Link to={'/cars'}>CARS BASE</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;