import Message from "./Message/Message";
import React from "react";
import classes from "./Messages.module.scss";
import { AddMessageFormType } from "./AddMessageForm/AddMessageForm";
import {AddMessagePayloadType} from "../../../redux/reducers/actions/dialogs-actions";
import { MessageType } from "../../../types/types";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

type MessagesPropsType = {
    messages: Array<MessageType>
    addMessageAC: (payload: AddMessagePayloadType) => void
}

export const Messages: React.FC<MessagesPropsType> = ({addMessageAC, messages}) => {

    let messagesElements = messages.map(m => <Message message={m} key={m.id}/>)


    const addNewMessage = (values: AddMessageFormType) => {
        addMessageAC({message: values.newMessageBody})
    }

    return <div className={classes.messages}>
        {messagesElements}
        <AddMessageForm addNewMessage={addNewMessage}/>
    </div>;
}

