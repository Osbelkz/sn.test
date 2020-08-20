import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/types";

let mapStateToProps = (state: StateType) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        onChangeMessageText: (newMessageText: string) => {
            dispatch(updateNewMessageTextActionCreator(newMessageText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
