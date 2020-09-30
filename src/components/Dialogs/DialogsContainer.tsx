import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {addMessageAC} from "../../redux/reducers/actions/dialogs-actions";


let mapStateToProps = (state: RootStateType) => {
    return {
        state: state.dialogsPage,
    }
}

export default compose<any>(
    withAuthRedirect,
    connect(mapStateToProps, {addMessageAC}),
)(Dialogs)
;
