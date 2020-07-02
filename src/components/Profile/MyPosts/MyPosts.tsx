import classes from './MyPosts.module.scss'
import React from "react";
import Post from "./Post/Post";

type PostDataType = {
    id:number
    message: string
    likeCounter: number
}

function MyPosts() {

    let postData: Array<PostDataType> = [
        {id: 1, message: "It's my first post", likeCounter: 333},
        {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
    ];

    let postElemets = postData.map(post=><Post key={post.id} message={post.message} likeCount={post.likeCounter}/>);

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
