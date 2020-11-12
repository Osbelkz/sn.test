import React from 'react';
import classes from './Button.module.scss';

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: React.FC<PropsType> = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};

export default Button;
