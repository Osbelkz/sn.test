import classes from './MyPosts.module.scss'
import React from "react";
import Post from "./Post/Post";

import {PostType} from "../../../redux/reducers/profile-page-reducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";


type PropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    addLike: (postId: string) => void
    deletePost: (postId: string) => void
}

function MyPosts(props: PropsType) {

    let postElements = props.posts.map(post => <Post key={post.id}
                                                     postId={post.id}
                                                     message={post.message}
                                                     addLike={props.addLike}
                                                     likeCount={post.likeCounter}
                                                     deletePost={props.deletePost}/>);

    const addNewPost = (values: AddPostFormType) => {
        props.addPost(values.newPostBody)
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

