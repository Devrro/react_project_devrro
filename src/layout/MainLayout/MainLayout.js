import React from 'react';
import style from './MainLayout.module.css'
import {Link,Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={style.header}>
                <Link to={'/home'}>Home</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;