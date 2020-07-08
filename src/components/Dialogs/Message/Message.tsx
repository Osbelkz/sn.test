import React from "react";
import classes from './Message.module.scss'

export type messagesType = {
    id: number
    name?: string,
    message: string,
    photo?: string,
    time?: string,
}

type MessagePropsType = {
    message: messagesType
}

function Message(props: MessagePropsType) {

    let messageClass = `${classes.message}`
    let messageRowClass = `${classes.message__row}`
    let messageBodyClass = `${classes.message__body}`

    if (props.message.id % 2) {
        messageClass = `${classes.message} ${classes.right}`
        messageRowClass = `${classes.message__row} ${classes.right__row}`
        messageBodyClass = `${classes.message__body} ${classes.right__body}`
    }

    return (
        <div className={messageClass} key={props.message.id}>
            <div className={messageRowClass}>
                <div className={classes.message__photo}>
                    <img src={props.message.photo} alt=""/>
                </div>
                <div className={messageBodyClass}>
                    <div>
                        <div className={classes.message__userName}>{props.message.name}</div>
                        <div>{props.message.message}</div>
                    </div>
                    <div className={classes.message__time}>{props.message.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message;
