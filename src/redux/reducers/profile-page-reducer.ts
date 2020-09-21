import {uuid} from "uuidv4";
import {DispatchType} from "../types";
import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";

enum PROFILE_PAGE_ACTION_TYPE {
    ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    ADD_LIKE = "ADD-LIKE",
    DELETE_POST = "DELETE_POST",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    SET_USER_STATUS = "SET_USER_STATUS"
}

export interface PostType {
    id: string
    message: string
    likeCounter: number
}

export interface ProfileType {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }
}

export interface ProfilePageStateType {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
    status: string
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

interface SetUserProfileActionType {
    type: PROFILE_PAGE_ACTION_TYPE.SET_USER_PROFILE
    profile: ProfileType
}

interface SetUserStatusActionType {
    type: PROFILE_PAGE_ACTION_TYPE.SET_USER_STATUS
    status: string
}

export type ProfilePageActionTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddLikeActionType
    | DeletePostActionType
    | SetUserProfileActionType
    | SetUserStatusActionType

let initialState: ProfilePageStateType = {
    posts: [
        {id: uuid(), message: "It's my first post", likeCounter: 333},
        {id: uuid(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
    ],
    newPostText: '',
    profile: null,
    status: ""
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
        case PROFILE_PAGE_ACTION_TYPE.SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case PROFILE_PAGE_ACTION_TYPE.SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}


export const addPost = (): AddPostActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.ADD_POST};
}
export const updateNewPostText = (text: string): UpdateNewPostTextActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.UPDATE_NEW_POST_TEXT, newPostText: text};
}
export const addLike = (postId: string): AddLikeActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.ADD_LIKE, postId: postId};
}
export const deletePost = (postId: string): DeletePostActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.DELETE_POST, postId: postId};
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.SET_USER_PROFILE, profile};
}
export const setUserStatus = (status: string): SetUserStatusActionType => {
    return {type: PROFILE_PAGE_ACTION_TYPE.SET_USER_STATUS, status};
}

//THUNKS

export const getUserProfile = (userId: string) => (dispatch: DispatchType) => {
    profileAPI.getProfile(userId)
        .then(data => dispatch(setUserProfile(data)))
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }

        })
}
