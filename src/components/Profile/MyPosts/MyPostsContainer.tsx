import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
    addLikeActionCreator
} from "../../../redux/profilePage-reducer";
import StoreContext from "../../../StoreContext";


type MyPostsContainerType = {}

function MyPostsContainer(props: MyPostsContainerType) {


    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState()

                function addPost(): void {
                    store.dispatch(addPostActionCreator())
                    store.dispatch(updateNewPostTextActionCreator(''))
                }

                function onPostChange(newPostText: string): void {
                    store.dispatch(updateNewPostTextActionCreator(newPostText))
                }

                function addLike(postId: string): void {
                    store.dispatch(addLikeActionCreator(postId))
                }
               return  <MyPosts posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}
                         addPost={addPost}
                         updateNewPostText={onPostChange}
                         addLike={addLike}/>
            }
        }
        </StoreContext.Consumer>

    )
}


export default MyPostsContainer;
