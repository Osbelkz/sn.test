import React from 'react';
import classes from "../Messages.module.scss";
import {useForm} from "react-hook-form";
import {FormInput} from "../../../common/FormInput/FormInput";

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
        <form onSubmit={addNewMessage}>
            <div className={classes.messages__input}>
                <FormInput ref={register}
                       name={"newMessageBody"}
                       placeholder={"type a message..."}
                />
                <button>Send</button>
            </div>
        </form>
    )
}

export default AddMessageForm;
