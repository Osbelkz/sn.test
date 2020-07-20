import Message from "./Message/Message";
import React, {ChangeEvent} from "react";
import classes from "./Messages.module.scss";
import {
    addMessageActionCreator,
    DispatchType,
    MessagesType,
    updateNewMessageTextActionCreator
} from "../../../redux/state";



type MessagesPropsType = {
    messages: Array<MessagesType>
    newMessageText: string
    dispatch: DispatchType
}

export function Messages(props: MessagesPropsType) {

    let messagesElements = props.messages.map(m => <Message message={m} key={m.id}/>)

    function onChangeInputText(e: ChangeEvent<HTMLInputElement>): void {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }

    function addMessage(): void {
        props.dispatch(addMessageActionCreator())
    }

    return <div className={classes.messages}>
        {messagesElements}
        <div className={classes.messages__input}>
            <input onChange={onChangeInputText}
                   value={props.newMessageText}
                   type="text"/>
            <button onClick={addMessage}>Send</button>
        </div>
    </div>;
}
