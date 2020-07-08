import React from "react";
import classes from './Dialogs.module.scss'
import Wrapper from "../Wrapper/Wrapper";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";



type PropsType = {
    state: DialogsPageType
}

function Dialogs(props: PropsType) {


    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)



    let messagesElements = props.state.messages.map(m => <Message message={m} key={m.id}/>)

    return (
        <Wrapper>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <div className={classes.dialogItems__header}>
                        <h3>Conversation</h3>
                        <div>search </div>
                    </div>
                    <div className={classes.dialogItems__body}>{dialogsElements}</div>
                </div>
                <div className={classes.messages}>
                    {messagesElements}

                    <div className={classes.block}>
                        <div className={classes.block__row}>
                            <div className={classes.block__element}></div>
                            <div className={classes.block__content}></div>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    );
}

export default Dialogs;
