import Message from "./Message/Message";
import React from "react";
import classes from "./Messages.module.scss";
import {MessagesType} from "../../../redux/reducers/dialogs-reducer";
import AddMessageFormRedux, { AddMessageFormType } from "./AddMessageForm/AddMessageForm";

type MessagesPropsType = {
    messages: Array<MessagesType>
    addMessage: (messageText: string) => void
}

export function Messages(props: MessagesPropsType) {

    let messagesElements = props.messages.map(m => <Message message={m} key={m.id}/>)

    // function onPressEnter(e: KeyboardEvent<HTMLInputElement>) {
    //     if (e.key === "Enter") {
    //     }
    // }

    const addNewMessage = (values: AddMessageFormType) => {
        props.addMessage(values.newMessageBody)
    }

    return <div className={classes.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>;
}

