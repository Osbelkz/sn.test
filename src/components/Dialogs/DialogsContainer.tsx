import React from "react";
import Dialogs from "./Dialogs";
import {addMessage, updateNewMessageText} from "../../redux/reducers/dialogs-reducer";
import {connect, ConnectedProps} from "react-redux";
import {StoreType} from "../../redux/redux-store";

let mapStateToProps = (state: StoreType) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, addMessage})

export type DialogsContainerPropsType = ConnectedProps<typeof DialogsContainer>

export default DialogsContainer(Dialogs);
