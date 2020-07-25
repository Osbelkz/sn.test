import classes from "./Post.module.scss";
import React from "react";
import postPhoto from '../../../../assets/post-photo.jpg'
import {DispatchType} from "../../../../redux/state";
import { addLikeActionCreator } from "../../../../redux/profilePage-reducer";

type PropsType = {
    message: string
    likeCount: number
    dispatch: DispatchType
    id: string
}


function Post(props: PropsType) {

    const OnClickHandler = () => props.dispatch(addLikeActionCreator(props.id))

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
