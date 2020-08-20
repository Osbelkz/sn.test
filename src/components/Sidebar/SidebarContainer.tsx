import React from "react";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/types";
import Sidebar from "./Sidebar";


const mapStateToProps = (state: StateType) => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {

    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;
