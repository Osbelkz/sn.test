import React from 'react';
import classes from "./FormControls.module.scss";

export const Element = (Element: string ) => ({ input, meta, ...props }: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <span className={ classes.formControl}>
            <Element className={(hasError ? classes.error : "")} {...input} {...props} />
            { hasError && <div className={classes.errorText}> { meta.error } </div> }
        </span>
    );
};

export const TextArea = Element("textarea");

export const Input = Element("input")
