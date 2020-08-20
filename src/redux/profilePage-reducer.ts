import {uuid} from "uuidv4";
import {ACTION_TYPE} from "./types";


export type PostsType = {
    id: string
    message: string
    likeCounter: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type AddPostActionType = {
    type: ACTION_TYPE.ADD_POST
}
export type UpdateNewPostTextActionType = {
    type: ACTION_TYPE.UPDATE_NEW_POST_TEXT
    newPostText: string
}
export type AddLikeActionType = {
    type: ACTION_TYPE.ADD_LIKE
    postId: string
}

export type profilePageActionType = AddPostActionType | UpdateNewPostTextActionType | AddLikeActionType

let initialState: ProfilePageType = {
    posts: [
        {id: uuid(), message: "It's my first post", likeCounter: 333},
        {id: uuid(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: profilePageActionType) => {

    // const actionObj: { [key: string]: ProfilePageType } = {
    //     [ACTION_TYPE.ADD_POST]: {
    //         ...state,
    //         posts: [...state.posts, {id: uuid(), message: state.newPostText, likeCounter: 0}]
    //     },
    //     [ACTION_TYPE.UPDATE_NEW_POST_TEXT]: {
    //         ...state,
    //         newPostText: action.newPostText
    //     },
    //     [ACTION_TYPE.ADD_LIKE]: {
    //         ...state,
    //         posts: state.posts.map(item=>item.id===action.postId ? {...item, likeCounter: item.likeCounter+1}: item)
    //     },
    // }
    // return actionObj[action.type] && actionObj[action.type] || state

    switch (action.type) {
        case ACTION_TYPE.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: uuid(), message: state.newPostText, likeCounter: 0}
                ]
            }
        case ACTION_TYPE.UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newPostText
            }
        case ACTION_TYPE.ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.postId
                    ? {...post, likeCounter: post.likeCounter + 1}
                    : post)
            }
        default:
            return state;
    }
}


export const addPostActionCreator = (): AddPostActionType => {
    return {type: ACTION_TYPE.ADD_POST};
}

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {type: ACTION_TYPE.UPDATE_NEW_POST_TEXT, newPostText: text};
}

export const addLikeActionCreator = (postId: string): AddLikeActionType => {
    return {type: ACTION_TYPE.ADD_LIKE, postId: postId};
}

