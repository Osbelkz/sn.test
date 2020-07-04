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
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
