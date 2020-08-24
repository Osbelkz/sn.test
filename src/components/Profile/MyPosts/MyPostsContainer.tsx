import React from "react";
import {
    updateNewPostTextAC, addPostAC, addLikeAC, deletePostAC
} from "../../../redux/reducers/profile-page-reducer";
import {connect, ConnectedProps} from "react-redux";
import {DispatchType} from "../../../redux/types";
import {StoreType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";


const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        updateNewPostText: (newPostText: string): void => {
            dispatch(updateNewPostTextAC(newPostText))
        },
        addPost: (): void => {
            dispatch(addPostAC())
        },
        addLike: (postId: string): void => {
            dispatch(addLikeAC(postId))
        },
        deletePost: (postId: string): void => {
            dispatch(deletePostAC(postId))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)

export type MyPostsContainerPropsType = ConnectedProps<typeof MyPostsContainer>

export default MyPostsContainer(MyPosts);
