import React from 'react';
import classes from "./AddMessageForm.module.scss";
import {useForm} from "react-hook-form";

export type AddMessageFormType = {
    newMessageBody: string
}

type PropsType = {
    addNewMessage: (values: AddMessageFormType) => void
}

const AddMessageForm: React.FC<PropsType> = (props) => {

    const {register, handleSubmit, setValue} = useForm<AddMessageFormType>()

    const addNewMessage = handleSubmit(({newMessageBody}) => {

        if (newMessageBody) {
            props.addNewMessage({newMessageBody})
            setValue("newMessageBody", "")
        }
    })

    return (
        <form onSubmit={addNewMessage} className={classes.add_message_form}>
            <input ref={register}
                   name={"newMessageBody"}
                   placeholder={"type a message..."}/>
            <button>Send</button>
        </form>
    )
}

export default AddMessageForm;
