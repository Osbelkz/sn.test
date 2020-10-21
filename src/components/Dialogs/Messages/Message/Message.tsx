import React from "react";
import classes from './Message.module.scss'
import {MessageType} from "../../../../types/types";


type MessagePropsType = {
    message: MessageType
}

const Message: React.FC<MessagePropsType> = ({message}) => {

    let messageClass = `${classes.message}`
    let messageRowClass = `${classes.message__row}`
    let messageBodyClass = `${classes.message__body}`

    // if (props.message.id % 2) {
    //     messageClass = `${classes.message} ${classes.right}`
    //     messageRowClass = `${classes.message__row} ${classes.right__row}`
    //     messageBodyClass = `${classes.message__body} ${classes.right__body}`
    // }

    return (
        <div className={messageClass} key={message.id}>
            <div className={messageRowClass}>
                <div className={classes.message__photo}>
                    <img src={message.photo} alt=""/>
                </div>
                <div >
                    <div className={messageBodyClass}>
                        <div className={classes.message__userName}>{message.name}</div>
                        <div>{message.message}</div>
                    </div>
                    <div className={classes.message__time}>time {message.time}</div>
                </div>

            </div>
        </div>
    )
}

export default Message;
