import classes from './MyPosts.module.scss'
import React from "react";
import Post from "./Post/Post";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";
import { PostType } from '../../../types/types';
import {AddLikePayloadType, AddPostPayloadType, DeletePostPayloadType} from '../../../redux/reducers/actions/profile-actions';


type PropsType = {
    posts: Array<PostType>
    addPostAC: (payload: AddPostPayloadType) => void
    addLikeAC: (payload: AddLikePayloadType) => void
    deletePostAC: (payload: DeletePostPayloadType) => void
}

const MyPosts: React.FC<PropsType> = (props)=> {

    let postElements = props.posts.map(post => <Post key={post.id}
                                                     postId={post.id}
                                                     message={post.message}
                                                     addLikeAC={props.addLikeAC}
                                                     likeCount={post.likeCounter}
                                                     deletePostAC={props.deletePostAC}/>);

    const addNewPost = (values: AddPostFormType) => {
        props.addPostAC({message: values.newPostBody})
    }

    return (
        <div className={classes.MyPosts}>
            <h3>My Posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
};

type AddPostFormType = {
    newPostBody: string
}

const maxLength30 = maxLengthCreator(30)

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.posts__input}>
            <Field
                name={"newPostBody"}
                component={TextArea}
                placeholder='type a post...'
                validate={[requiredField, maxLength30]}/>
            <button>Post</button>
        </form>
    )
};

const AddPostFormRedux = reduxForm<AddPostFormType>({form: "profileAddPostForm"})(AddPostForm);

export default MyPosts;

