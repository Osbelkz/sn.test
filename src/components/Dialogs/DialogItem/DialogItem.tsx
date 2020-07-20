import React from "react";
import classes from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

function DialogItem(props: DialogItemPropsType) {
    return (
            <NavLink to={`/messages/${props.id}`} key={props.id} className={classes.dialog}  activeClassName={classes.active}>
                <div className={classes.dialog__body}>
                    <div className={classes.dialog__photo}></div>
                    <div className={classes.dialog__name}>{props.name}</div>
                </div>
            </NavLink>
    )
}

export default DialogItem;
