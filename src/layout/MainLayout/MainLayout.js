import React from 'react';
import style from './MainLayout.module.css'
import {Link,Outlet} from "react-router-dom";
import Button from "../../components/Button/Button";

const MainLayout = () => {
    return (
        <div>
            <div className={style.header}>
                <div style={{width:'100px'}}>
                    <Button onClick={() => {console.log('hello')}}>Kot</Button>
                </div>
                <div style={{width:'100px'}}>
                    <Button onClick={() => {console.log('hello')}}>Doggo</Button>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;