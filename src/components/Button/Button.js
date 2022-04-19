import React, {useState} from 'react';
import bt from './Button.module.css'
import {Link} from "react-router-dom";

const Button = ({to,state,children, ...arg}) => {
    return (
        <Link to={to} state={state}>
            <button className={bt.button_simple} {...arg}>{children}</button>
        </Link>
    );
};

export default Button;
