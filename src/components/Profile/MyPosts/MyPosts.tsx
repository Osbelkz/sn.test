import classes from './MyPosts.module.scss'
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";

import {PostType} from "../../../redux/reducers/profile-page-reducer";


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    addLike: (postId: string) => void
    deletePost: (postId: string) => void
    updateNewPostText: (newPostText: string) => void
}

function MyPosts(props: PropsType) {

    let postElements = props.posts.map(post => <Post key={post.id}
                                                     postId={post.id}
                                                     message={post.message}
                                                     addLike={props.addLike}
                                                     likeCount={post.likeCounter}
                                                     deletePost={props.deletePost}/>);

    function onAddPost(): void {
        if (props.newPostText) {
            props.addPost();
        }
    }

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>): void {
        props.updateNewPostText(e.currentTarget.value)
    }


    return (
        <div className={classes.MyPosts}>
            <h3>My Posts</h3>
            <div className={classes.posts__input}>
                <textarea onChange={onPostChange}
                          value={props.newPostText}
                          placeholder='type a post...'/>
                <button onClick={onAddPost}>Post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>

        </div>
    )
}


export default MyPosts;
