import classes from "./Post.module.scss";
import React from "react";
import postPhoto from '../../../../assets/post-photo.jpg'
import {AddLikePayloadType, DeletePostPayloadType} from "../../../../redux/reducers/actions/profile-actions";

type PropsType = {
    message: string
    likeCount: number
    postId: string
    addLikeAC: (payload: AddLikePayloadType) => void
    deletePostAC: (payload: DeletePostPayloadType) => void
}


function Post({message, addLikeAC, deletePostAC, likeCount, postId}: PropsType) {

    const OnClickHandler = () => {
        addLikeAC({postId})
    }

    const onDeletePost = () => {
        deletePostAC({postId})
    }


    return (
        <div className={classes.post}>

            <div className={classes.post__authorPhoto}>
                <div><img src={postPhoto} alt=""/></div>
            </div>

            <div className={classes.post__body}>
                <div className={classes.post__body_header}>Post Author</div>
                <div className={classes.post__body_text}>
                    {message}
                </div>
                <div className={classes.post__body_footer}>
                    <button onClick={OnClickHandler}>LIKE {likeCount}</button>
                    <button onClick={onDeletePost}>Delete Post</button>
                </div>

            </div>
        </div>
    )
}

export default Post;
