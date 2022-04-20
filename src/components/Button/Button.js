import React from 'react';
import btn from './Button.module.css'
const Button = ({children,...arg}) => {
    return (
        <div>
            <button className={btn.btn_custom} {...arg}>{children}</button>
        </div>
    );
};

export default Button;