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


const Dialogs: React.FC<PropsType> = ({state, addMessageAC}) => {

    return (
        <Wrapper>
            <div className={classes.dialogs}>
                <DialogItems dialogs={state.dialogs}/>
                <Messages messages={state.messages}
                          addMessageAC={addMessageAC}
                />
            </div>
        </Wrapper>
    );
}

export default Dialogs;
