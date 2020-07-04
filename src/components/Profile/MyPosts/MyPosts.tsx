import classes from './MyPosts.module.scss'
import React from "react";
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
}

function MyPosts(props: PropsType) {

    let postElemets = props.posts.map(post=><Post key={post.id} message={post.message} likeCount={post.likeCounter}/>);

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea placeholder='type a post'/>
                <button>Send</button>
            </div>
            <div className={classes.posts}>
                {postElemets}
            </div>

        </div>
    )
}


export default MyPosts;
