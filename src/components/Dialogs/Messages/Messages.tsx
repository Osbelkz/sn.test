import Message from "./Message/Message";
import React, {ChangeEvent} from "react";
import classes from "./Messages.module.scss";
import {
    DispatchType,
    MessagesType,
} from "../../../redux/state";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";



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
        props.dispatch(updateNewMessageTextActionCreator(""))
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
