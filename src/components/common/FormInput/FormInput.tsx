import React from "react";
import classes from "./FormInput.module.css";

interface PropsType extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    > {
    label?: string
    errorText?: string | undefined
    errorCondition?: boolean
}

export const FormInput = React.memo(React.forwardRef<HTMLInputElement, PropsType>(
    ({label, errorCondition, errorText,  ...rest }, ref) => {

        return (
            <div className={classes.input}>
                <p className={classes.input__label}>{label}</p>
                <input className={`${classes.input__elem} ${errorCondition ? classes.input__error : ""}`}
                       ref={ref}
                       {...rest}/>
                {errorCondition ? <div
                    className={classes.inputs__error_text}>{errorText}</div> : null}
            </div>
        )
    }))

