import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.scss'
import Wrapper from "../Wrapper/Wrapper";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    DialogsPageType,
    DispatchType,
    updateNewMessageTextActionCreator
} from "../../redux/state";


type PropsType = {
    state: DialogsPageType
    newMessageText: string
    dispatch: DispatchType
}

function Dialogs(props: PropsType) {


    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem
        name={dialog.name}
        key={dialog.id}
        id={dialog.id}/>)


    let messagesElements = props.state.messages.map(m => <Message message={m} key={m.id}/>)


    function onChangeInputText(e: ChangeEvent<HTMLInputElement>): void {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }

    function addMessage(): void {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <Wrapper>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <div className={classes.dialogItems__header}>
                        <h3>Conversation</h3>
                        <div>search</div>
                    </div>
                    <div className={classes.dialogItems__body}>{dialogsElements}</div>
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <div className={classes.messages__input}>
                        <input onChange={onChangeInputText}
                               value={props.newMessageText}
                               type="text"/>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Dialogs;
