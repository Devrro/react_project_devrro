import React, {useState} from 'react';
import bt from './Button.module.css'

const Button = ({children}) => {

    return (

        <div>
            <button className={bt.button_simple}>{children}</button>
        </div>
    );
};

export default Button;