import React from "react";
import classes from './Message.module.scss'

type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message;
