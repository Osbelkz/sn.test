import React from 'react';
import {useForm} from "react-hook-form";
import classes from "../MyPosts.module.scss";
import {FormInput} from "../../../common/FormInput/FormInput";

export type AddPostFormType = {
    newPostBody: string
}

type AddPostFormPropsType = {
    addNewPost: (values: AddPostFormType) => void
}

const AddPostForm: React.FC<AddPostFormPropsType> = (props) => {

    const {register, handleSubmit} = useForm<AddPostFormType>()

    const addNewPost = handleSubmit(({newPostBody}) => {
        props.addNewPost({newPostBody})
    })

    return (
        <form onSubmit={addNewPost} className={classes.posts__input}>
            <FormInput
                ref={register}
                name={"newPostBody"}
                placeholder='type a post...'/>
            <button>Post</button>
        </form>
    )
};

export default AddPostForm;
