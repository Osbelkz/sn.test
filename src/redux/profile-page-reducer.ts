import {uuid} from "uuidv4";

enum PROFILE_PAGE_ACTION_TYPE {
    ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    ADD_LIKE = "ADD-LIKE",
    DELETE_POST = "DELETE_POST",
}

export interface PostType {
    id: string
    message: string
    likeCounter: number
}
export interface ProfilePageStateType {
    posts: Array<PostType>
    newPostText: string
}

interface AddPostActionType {
    type: PROFILE_PAGE_ACTION_TYPE.ADD_POST
}
interface UpdateNewPostTextActionType {
    type: PROFILE_PAGE_ACTION_TYPE.UPDATE_NEW_POST_TEXT
    newPostText: string
}
interface AddLikeActionType {
    type: PROFILE_PAGE_ACTION_TYPE.ADD_LIKE
    postId: string
}
interface DeletePostActionType {
    type: PROFILE_PAGE_ACTION_TYPE.DELETE_POST
    postId: string
}

export type ProfilePageActionTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddLikeActionType
    | DeletePostActionType

let initialState: ProfilePageStateType = {
    posts: [
        {id: uuid(), message: "It's my first post", likeCounter: 333},
        {id: uuid(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
    ],
    newPostText: ''
}

export const profileReducer = (
    state = initialState,
    action: ProfilePageActionTypes
): ProfilePageStateType => {

    //Динамическая деспичеризация, не хватает типов, не работает
    // const actionObj: { [key: string]: ProfilePageStateType } = {
    //     [PROFILE_PAGE_ACTION_TYPE.ADD_POST]: {
    //         ...state,
    //         posts: [...state.posts, {id: uuid(), message: state.newPostText, likeCounter: 0}]
    //     },
    //     [PROFILE_PAGE_ACTION_TYPE.UPDATE_NEW_POST_TEXT]: {
    //         ...state,
    //         newPostText: action.newPostText
    //     },
    //     [PROFILE_PAGE_ACTION_TYPE.ADD_LIKE]: {
    //         ...state,
    //         posts: state.posts.map(item=>item.id===action.postId ? {...item, likeCounter: item.likeCounter+1}: item)
    //     },
    // }
    // return actionObj[action.type] && actionObj[action.type] || state

    switch (action.type) {
        case PROFILE_PAGE_ACTION_TYPE.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: uuid(), message: state.newPostText, likeCounter: 0}
                ],
                newPostText: ""
            }
        case PROFILE_PAGE_ACTION_TYPE.UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newPostText
            }
        case PROFILE_PAGE_ACTION_TYPE.ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(
                    post => post.id === action.postId
                        ? {...post, likeCounter: post.likeCounter + 1}
                        : post
                )
            }
        case PROFILE_PAGE_ACTION_TYPE.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        default:
            return state;
    }
}


export const addPostAC = (): AddPostActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.ADD_POST};
}
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.UPDATE_NEW_POST_TEXT, newPostText: text};
}
export const addLikeAC = (postId: string): AddLikeActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.ADD_LIKE, postId: postId};
}
export const deletePostAC = (postId: string): DeletePostActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.DELETE_POST, postId: postId};
}
