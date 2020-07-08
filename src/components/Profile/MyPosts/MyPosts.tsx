import classes from './MyPosts.module.scss'
import React from "react";
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
}

function MyPosts(props: PropsType) {

    let postElements = props.posts.map(post=><Post key={post.id} message={post.message} likeCount={post.likeCounter}/>);

    let newPostElement: any = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
            alert(text)
    }



    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement}
                    placeholder='type a post'/>
                <button onClick={addPost}>Send</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>

        </div>
    )
}


export default MyPosts;
