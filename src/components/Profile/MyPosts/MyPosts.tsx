import classes from './MyPosts.module.scss'
import React from "react";
import Post from "./Post/Post";
import {PostType} from '../../../types/types';
import {
    AddLikePayloadType,
    AddPostPayloadType,
    DeletePostPayloadType
} from '../../../redux/reducers/actions/profile-actions';
import AddPostForm, {AddPostFormType} from './AddPostForm/AddPostForm';


type PropsType = {
    posts: Array<PostType>
    addPostAC: (payload: AddPostPayloadType) => void
    addLikeAC: (payload: AddLikePayloadType) => void
    deletePostAC: (payload: DeletePostPayloadType) => void
}

const MyPosts: React.FC<PropsType> = ({posts, addPostAC, addLikeAC, deletePostAC}) => {

    let postElements = posts.map(post => <Post key={post.id}
                                               postId={post.id}
                                               message={post.message}
                                               addLikeAC={addLikeAC}
                                               likeCount={post.likeCounter}
                                               deletePostAC={deletePostAC}/>);

    const addNewPost = (values: AddPostFormType) => {
        addPostAC({message: values.newPostBody})
    }

    return (
        <div className={classes.MyPosts}>
            <h3>My Posts</h3>
            <AddPostForm addNewPost={addNewPost}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;

