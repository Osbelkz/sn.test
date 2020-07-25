import {uuid} from "uuidv4";
import {ACTION_TYPE, DispatchActionType, ProfilePageType} from "./state";

let initialState: ProfilePageType = {
    posts: [
        {id: uuid(), message: "It's my first post", likeCounter: 333},
        {id: uuid(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
    ],
    newPostText: 'fd'
}

export const profileReducer = (state = initialState, action: DispatchActionType) => {

    const actionObj: { [key: string]: any } = {
        [ACTION_TYPE.ADD_POST]: {
            ...state,
            posts: [...state.posts, {id: uuid(), message: state.newPostText, likeCounter: 0}]
        },
        [ACTION_TYPE.UPDATE_NEW_POST_TEXT]: {
            ...state,
            newPostText: action.newPostText
        },
        [ACTION_TYPE.ADD_LIKE]: {
            ...state,
            posts: state.posts.map(item=>item.id===action.id ? {...item, likeCounter: item.likeCounter+1}: item)
        },
    }
    return actionObj[action.type] && actionObj[action.type] || state

    // switch (action.type) {
    //     case ACTION_TYPE.ADD_POST: {
    //         if (state.newPostText) {
    //             let newPost: PostsType = {
    //                 id: uuid(),
    //                 message: state.newPostText,
    //                 likeCounter: 0
    //             }
    //             state.posts.push(newPost)
    //             state.newPostText = '';
    //         }
    //         break
    //     }
    //     case ACTION_TYPE.UPDATE_NEW_POST_TEXT : {
    //         if (action.newPostText) {
    //             state.newPostText = action.newPostText;
    //         }
    //         break
    //     }
    //     case ACTION_TYPE.ADD_LIKE: {
    //         let post = state.posts.find(post => post.id === action.id)
    //         if (post) {
    //             post.likeCounter = post.likeCounter + 1
    //         }
    //         break
    //     }
    //
    // }
    //
    // return state;
}


export const addPostActionCreator = (): DispatchActionType =>
    ({type: ACTION_TYPE.ADD_POST})

export const updateNewPostTextActionCreator = (text: string): DispatchActionType =>
    ({type: ACTION_TYPE.UPDATE_NEW_POST_TEXT, newPostText: text})

export const addLikeActionCreator = (id: string): DispatchActionType =>
    ({type: ACTION_TYPE.ADD_LIKE, id: id})
