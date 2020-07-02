import React from "react";
import classes from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";
// @ts-ignore
import Wrapper from "../Wrapper/Wrapper";

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

type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

type DialogsDataType = {
    id:number
    name: string
}
type MessagesDataType = {
    id:number
    message: string
}

function Dialogs() {
    let dialogsData: Array<DialogsDataType> = [
        {id:1, name: "Diko"},
        {id:2, name: "Almaz"},
        {id:3, name: "Erzhan"},
        {id:4, name: "Banzai"}
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)

    let messagesData: Array<MessagesDataType> = [
        {id:1, message: "Hi"},
        {id:2, message: "How are you"},
        {id:3, message: "Monolog"},
        {id:4, message: "Yo"}
    ]

    let messagesElements = messagesData.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <Wrapper>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </Wrapper>
    );
}

export default Dialogs;
