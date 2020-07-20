import classes from './MyPosts.module.scss'
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {
    addPostActionCreator,
    DispatchType,
    PostsType,
    updateNewPostTextActionCreator
} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    dispatch: DispatchType
    newPostText: string
}


function MyPosts(props: PropsType) {

    let postElements = props.posts.map(post => <Post key={post.id}
                                                     id={post.id}
                                                     message={post.message}
                                                     dispatch={props.dispatch}
                                                     likeCount={post.likeCounter}/>);

    function addPost(): void {
        props.dispatch(addPostActionCreator())
    }

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>): void {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }


    return (
        <div className={classes.MyPosts}>
            <h3>My Posts</h3>
            <div className={classes.posts__input}>
                <textarea onChange={onPostChange}
                          value={props.newPostText}
                          placeholder='type a post...'/>
                <button onClick={addPost}>Post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>

        </div>
    )
}


export default MyPosts;
