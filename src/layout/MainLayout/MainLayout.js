import React from 'react';
import style from './MainLayout.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={style.header}>
                <Link to={'/home'}>Home</Link>
                <Link to={'/animalCreator'}>AnimalCreator</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;