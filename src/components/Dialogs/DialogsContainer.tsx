import React from "react";
import Dialogs from "./Dialogs";
import {addMessage, updateNewMessageText} from "../../redux/reducers/dialogs-reducer";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: StoreType) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

export default compose<any>(
    withAuthRedirect,
    connect(mapStateToProps, {updateNewMessageText, addMessage}),
)(Dialogs)
;
