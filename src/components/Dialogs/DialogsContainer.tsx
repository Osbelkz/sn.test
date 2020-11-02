import React, {useCallback} from "react";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {addMessageAC, AddMessagePayloadType} from "../../redux/reducers/actions/dialogs-actions";
import {DialogsPageStateType} from "../../redux/reducers/dialogs-reducer";



const DialogsContainer = () => {

    const dispatch = useDispatch()
    const dialogsPageState = useSelector<RootStateType, DialogsPageStateType>(state => state.dialogsPage)

    const addMessageHandler = useCallback((payload: AddMessagePayloadType) => {
        dispatch(addMessageAC(payload))
    }, [])

    return (
        <Dialogs state={dialogsPageState} addMessageAC={addMessageHandler} />
    );
};

export default DialogsContainer;
