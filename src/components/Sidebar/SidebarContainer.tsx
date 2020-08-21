import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {DispatchType} from "../../redux/types";
import Sidebar from "./Sidebar";
import {StoreType} from "../../redux/redux-store";


const mapStateToProps = (state: StoreType) => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {

    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)

export type SidebarContainerPropsType = ConnectedProps<typeof SidebarContainer>

export default SidebarContainer(Sidebar);
