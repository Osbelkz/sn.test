import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
    addLikeActionCreator
} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../../redux/types";


const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        updateNewPostText: (newPostText: string): void => {
            dispatch(updateNewPostTextActionCreator(newPostText))
        },
        addPost: (): void => {
            dispatch(addPostActionCreator())
        },
        addLike: (postId: string): void => {
            dispatch(addLikeActionCreator(postId))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
