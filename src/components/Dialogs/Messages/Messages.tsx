import Message from "./Message/Message";
import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./Messages.module.scss";
import {MessagesType} from "../../../redux/dialogs-reducer";


type MessagesPropsType = {
    messages: Array<MessagesType>
    newMessageText: string
    onChangeMessageText: (newMessageText: string) => void
    addMessage: () => void
}

export function Messages(props: MessagesPropsType) {

    let messagesElements = props.messages.map(m => <Message message={m} key={m.id}/>)

    function onChangeInputText(e: ChangeEvent<HTMLInputElement>): void {
        props.onChangeMessageText(e.currentTarget.value)
    }

    function onAddMessage(): void {
        if (props.newMessageText) {
            props.addMessage()
        }
    }

    function onPressEnter(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key==="Enter") {
            onAddMessage()
        }
    }

    return <div className={classes.messages}>
        {messagesElements}
        <div className={classes.messages__input}>
            <input onChange={onChangeInputText}
                   onKeyPress={onPressEnter}
                   value={props.newMessageText}
                   placeholder={"type a message..."}
                   type="text"/>
            <button onClick={onAddMessage}>Send</button>
        </div>
    </div>;
}
