import React from "react";
import classes from './Dialogs.module.scss'
import Wrapper from "../Wrapper/Wrapper";
import {DialogItems} from "./DIalogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {DialogsPageStateType} from "../../redux/reducers/dialogs-reducer";

type PropsType = {
    state: DialogsPageStateType
    newMessageText: string
    updateNewMessageText: (text: string) => void
    addMessage: () => void
}


function Dialogs(props: PropsType) {

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