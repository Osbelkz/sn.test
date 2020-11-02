import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {
    addLikeAC,
    AddLikePayloadType,
    addPostAC,
    AddPostPayloadType,
    deletePostAC, DeletePostPayloadType
} from "../../../redux/reducers/actions/profile-actions";
import { PostType } from "../../../types/types";

const MyPostsContainer = () => {

    const dispatch = useDispatch()
    const posts = useSelector<RootStateType, PostType[]>(state => state.profilePage.posts)

    const addPostHandler = useCallback((payload: AddPostPayloadType) => {
        dispatch(addPostAC(payload))
    }, [])
    const addLikeHandler = useCallback((payload: AddLikePayloadType) => {
        dispatch(addLikeAC(payload))
    }, [])
    const deletePostHandler = useCallback((payload: DeletePostPayloadType) => {
        dispatch(deletePostAC(payload))
    }, [])

    return <MyPosts posts={posts} addPostAC={addPostHandler} addLikeAC={addLikeHandler} deletePostAC={deletePostHandler} />
}

export default MyPostsContainer;
