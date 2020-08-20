import classes from './MyPosts.module.scss'
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {
    DispatchType,
    PostsType,
} from "../../../redux/state";



type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: ()=>void
    updateNewPostText: (newPostText: string) => void
    addLike: ()=>void
}


function MyPosts(props: PropsType) {

    let postElements = props.posts.map(post => <Post key={post.id}
                                                     postId={post.id}
                                                     message={post.message}
                                                     addLike={props.addLike}
                                                     likeCount={post.likeCounter}/>);

    function addPost(): void {
        props.addPost();
        // props.dispatch(addPostActionCreator())
        // props.dispatch(updateNewPostTextActionCreator(''))
    }

    function onPostChange(e: ChangeEvent<HTMLTextAreaElement>): void {
        props.updateNewPostText(e.currentTarget.value)
        // props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
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
