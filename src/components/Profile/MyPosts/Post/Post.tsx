import classes from "./Post.module.scss";
import React from "react";
import postPhoto from '../../../../assets/post-photo.jpg'

type PropsType = {
    message: string
    likeCount: number
    postId: string
    addLike: (postId: string) => void
}


function Post(props: PropsType) {

    const OnClickHandler = () => {
        props.addLike(props.postId)
        // props.dispatch(addLikeActionCreator(props.id))
    }


    return (
        <div className={classes.post}>
            <div className={classes.post__header}>
                <div><img src={postPhoto} alt=""/></div>
                <p>Lorem Ipsum is simply</p>
            </div>
            <div className={classes.post__body}>
                {props.message}
            </div>
            <div className={classes.post__footer}>
                <button onClick={OnClickHandler}>LIKE {props.likeCount}</button>
            </div>

        </div>
    )
}

export default Post;
