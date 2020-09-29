import React from "react";
import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/reducers/dialogs-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        state: state.dialogsPage,
    }
}

export default compose<any>(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage}),
)(Dialogs)
;
