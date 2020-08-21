import classes from "./Post.module.scss";
import React from "react";
import postPhoto from '../../../../assets/post-photo.jpg'

type PropsType = {
    message: string
    likeCount: number
    postId: string
    addLike: (postId: string) => void
    deletePost: (postId: string) => void
}


function Post(props: PropsType) {

    const OnClickHandler = () => {
        props.addLike(props.postId)
        // props.dispatch(addLikeActionCreator(props.id))
    }

    const onDeletePost = () => {
        props.deletePost(props.postId)
    }


    return (
        <div className={classes.post}>

            <div className={classes.post__authorPhoto}>
                <div><img src={postPhoto} alt=""/></div>
            </div>

            <div className={classes.post__body}>

                <div className={classes.post__body_header}>Post Author</div>

                <div className={classes.post__body_text}>
                    {props.message}
                </div>

                <div className={classes.post__body_footer}>
                    <button onClick={OnClickHandler}>LIKE {props.likeCount}</button>
                    <button onClick={onDeletePost}>Delete Post</button>
                </div>

            </div>
        </div>
    )
}

export default Post;
