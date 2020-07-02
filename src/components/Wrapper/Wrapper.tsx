import React from "react";
import classes from './Wrapper.module.scss'

function Wrapper(props: any) {
    return (
        <div className={classes.wrapper}>{props.children}</div>
    )
}

export default Wrapper;
