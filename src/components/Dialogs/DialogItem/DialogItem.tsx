import React from "react";
import classes from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div key={props.id} className={classes.dialog}>
            <NavLink to={`/messages/${props.id}`}>
                <div className={classes.dialog__body}>
                    <div className={classes.dialog__photo}></div>
                    <div className={classes.dialog__name}>{props.name}</div>
                </div>


            </NavLink>
        </div>
    )
}

export default DialogItem;
