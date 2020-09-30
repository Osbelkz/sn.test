import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {addLikeAC, addPostAC, deletePostAC} from "../../../redux/reducers/actions/profile-actions";
import { PostType } from "../../../types/types";

export type MapStateToPropsType = {
    posts: PostType[]
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostAC, addLikeAC, deletePostAC})(MyPosts)

export default MyPostsContainer;
