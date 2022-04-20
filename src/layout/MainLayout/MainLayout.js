import React from 'react';
import style from './MainLayout.module.css'
import {Link,Outlet} from "react-router-dom";
import Button from "../../components/Button/Button";

const MainLayout = () => {
    return (
        <div>
            <div className={style.header}>
                <Button>Kot</Button>
                <Button>Dogo</Button>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;