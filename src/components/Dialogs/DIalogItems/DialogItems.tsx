import React from "react";
import classes from './DialogItems.module.scss'
import SearchIcon from '../../../assets/Find-Outline.svg'
import DialogItem from "./DialogItem/DialogItem";
import {DialogsType} from "../../../redux/reducers/dialogs-reducer";


type DialogItemPropsType = {
    dialogs: Array<DialogsType>
}

export function DialogItems(props: DialogItemPropsType) {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem
        name={dialog.name}
        key={dialog.id}
        id={dialog.id}/>)

    return (
        <div className={classes.dialogItems}>
            <div className={classes.dialogItems__header}>
                <h3>Conversation</h3>
                <div className={classes.dialogItems__header__search}>
                    <div><img src={SearchIcon} alt=""/></div>
                    <div><input placeholder={"Search here"} type="text"/></div>
                </div>
                <div className={classes.dialogItems__header__filter}>filter</div>
            </div>
            <div className={classes.dialogItems__body}>{dialogsElements}</div>
        </div>);
}



