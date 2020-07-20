import React from "react";
import classes from './Dialogs.module.scss'
import Wrapper from "../Wrapper/Wrapper";
import {DialogItems} from "./DIalogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {
    DialogsPageType,
    DispatchType,
} from "../../redux/state";


type PropsType = {
    state: DialogsPageType
    newMessageText: string
    dispatch: DispatchType
}




function Dialogs(props: PropsType) {

    return (
        <Wrapper>
            <div className={classes.dialogs}>
                <DialogItems dialogs={props.state.dialogs}/>
                <Messages messages={props.state.messages} newMessageText={props.newMessageText} dispatch={props.dispatch}/>
            </div>
        </Wrapper>
    );
}

export default Dialogs;
