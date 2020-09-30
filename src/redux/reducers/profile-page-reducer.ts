import {uuid} from "uuidv4";
import {ProfileType, PostType} from "../../types/types";
import {ACTIONS_TYPE, ProfilePageActionTypes} from "./actions/profile-actions";


export type ProfilePageStateType = typeof initialState;


let initialState = {
    posts: [
        {id: uuid(), message: "It's my first post", likeCounter: 333},
        {id: uuid(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
    ] as PostType[],
    profile: null as ProfileType | null,
    status: ""
}



export const profileReducer = (
    state = initialState,
    action: ProfilePageActionTypes
): ProfilePageStateType => {

    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: uuid(), ...action.payload, likeCounter: 0}
                ],
            }
        case ACTIONS_TYPE.ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(
                    post => post.id === action.payload.postId
                        ? {...post, likeCounter: post.likeCounter + 1}
                        : post
                )
            }
        case ACTIONS_TYPE.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.postId)
            }
        case ACTIONS_TYPE.SET_USER_PROFILE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ACTIONS_TYPE.SET_USER_STATUS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}


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
