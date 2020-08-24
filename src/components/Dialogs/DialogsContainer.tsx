import React from "react";
import Dialogs from "./Dialogs";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducer";
import {connect, ConnectedProps} from "react-redux";
import {DispatchType} from "../../redux/types";
import {StoreType} from "../../redux/redux-store";

let mapStateToProps = (state: StoreType) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        onChangeMessageText: (newMessageText: string) => {
            dispatch(updateNewMessageTextAC(newMessageText))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)

export type DialogsContainerPropsType = ConnectedProps<typeof DialogsContainer>

export default DialogsContainer(Dialogs);
