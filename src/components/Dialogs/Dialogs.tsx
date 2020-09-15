import React from "react";
import classes from './Dialogs.module.scss'
import Wrapper from "../Wrapper/Wrapper";
import {DialogItems} from "./DIalogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {DialogsContainerPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";


type PropsType = DialogsContainerPropsType


function Dialogs(props: PropsType) {

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <Wrapper>
            <div className={classes.dialogs}>
                <DialogItems dialogs={props.state.dialogs}/>
                <Messages messages={props.state.messages}
                          newMessageText={props.newMessageText}
                          onChangeMessageText={props.updateNewMessageText}
                          addMessage={props.addMessage}
                />
            </div>
        </Wrapper>
    );
}

export default Dialogs;
