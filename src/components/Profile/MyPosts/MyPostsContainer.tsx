import React from "react";
import {
    addPost, addLike, deletePost
} from "../../../redux/reducers/profile-page-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";


const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, addLike, deletePost})(MyPosts)

export default MyPostsContainer;
