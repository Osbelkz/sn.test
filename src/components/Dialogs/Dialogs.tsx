import React from "react";
import classes from './Dialogs.module.scss'
import Wrapper from "../Wrapper/Wrapper";
import {DialogItems} from "./DIalogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {DialogsPageStateType} from "../../redux/reducers/dialogs-reducer";
import {AddMessagePayloadType} from "../../redux/reducers/actions/dialogs-actions";

type PropsType = {
    state: DialogsPageStateType
    addMessageAC: (payload: AddMessagePayloadType) => void
}


function Dialogs(props: PropsType) {

    return (
        <Wrapper>
            <div className={classes.dialogs}>
                <DialogItems dialogs={props.state.dialogs}/>
                <Messages messages={props.state.messages}
                          addMessageAC={props.addMessageAC}
                />
            </div>
        </Wrapper>
    );
}

export default Dialogs;
