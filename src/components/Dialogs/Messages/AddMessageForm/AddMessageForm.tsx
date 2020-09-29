import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "../Messages.module.scss";
import {Input} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";

export type AddMessageFormType = {
    newMessageBody: string
}

const maxLength30 = maxLengthCreator(30)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.messages__input}>
                <Field component={Input}
                       validate={[requiredField, maxLength30]}
                       name={"newMessageBody"}
                       placeholder={"type a message..."}
                />
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default AddMessageFormRedux;
