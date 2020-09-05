import React from "react";
import {
    updateNewPostText, addPost, addLike, deletePost
} from "../../../redux/reducers/profile-page-reducer";
import {connect, ConnectedProps} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";


const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         updateNewPostText: (newPostText: string): void => {
//             dispatch(updateNewPostTextAC(newPostText))
//         },
//         addPost: (): void => {
//             dispatch(addPostAC())
//         },
//         addLike: (postId: string): void => {
//             dispatch(addLikeAC(postId))
//         },
//         deletePost: (postId: string): void => {
//             dispatch(deletePostAC(postId))
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost, addLike, deletePost})

export type MyPostsContainerPropsType = ConnectedProps<typeof MyPostsContainer>

export default MyPostsContainer(MyPosts);
