import classes from "./Post.module.scss";
import React from "react";
import postPhoto from '../../../../assets/post-photo.jpg'
import {AddLikePayloadType, DeletePostPayloadType} from "../../../../redux/reducers/actions/profile-actions";
import {PostType} from "../../../../types/types";
import Button from "../../../common/Buttons/Button/Button";

type PropsType = {
    post: PostType
    addLikeAC: (payload: AddLikePayloadType) => void
    deletePostAC: (payload: DeletePostPayloadType) => void
}


function Post({post: {message, id, likeCounter}, addLikeAC, deletePostAC}: PropsType) {

    const OnClickHandler = () => {
        addLikeAC({postId: id})
    }

    const onDeletePost = () => {
        deletePostAC({postId: id})
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
                    <Button onClick={OnClickHandler}>Likes {likeCounter}</Button>
                    <Button onClick={onDeletePost}>Delete Post</Button>
                </div>

            </div>
        </div>
    )
}

export default Post;
