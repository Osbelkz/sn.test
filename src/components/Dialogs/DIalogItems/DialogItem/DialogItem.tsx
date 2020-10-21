import React from "react";
import classes from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return (
        <NavLink to={`/messages/${id}`} key={id} className={classes.dialog}
                 activeClassName={classes.active}>
            <div className={classes.dialog__row}>
                <div className={classes.dialog__photo}></div>
                <div className={classes.dialog__body}>
                    <div className={classes.dialog__body__name}>{name}</div>
                    <div className={classes.dialog__body__last_message}>
                        {"last message"}
                        <span>{"last mes time"}</span>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default DialogItem;
