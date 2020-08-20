import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import {StoreType} from "../../redux/types";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";


type PropsType = {
}

function DialogsContainer(props: PropsType) {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState()

                function onChangeInputText(newMessageText: string): void {
                    store.dispatch(updateNewMessageTextActionCreator(newMessageText))
                }

                function addMessage(): void {
                    store.dispatch(addMessageActionCreator())
                    store.dispatch(updateNewMessageTextActionCreator(""))
                }
                return <Wrapper>
                    <Dialogs newMessageText={state.dialogsPage.newMessageText}
                             state={state.dialogsPage}
                             onChangeMessageText={onChangeInputText}
                             addMessage={addMessage}
                    />
                </Wrapper>
            }}
        </StoreContext.Consumer>

    );
}
export default DialogsContainer;
