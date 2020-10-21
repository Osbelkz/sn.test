import {addPostAC} from "../actions/profile-actions";
import {profileReducer, ProfilePageStateType} from "../profile-page-reducer";
import { uuid } from "uuidv4";
import { PostType, ProfileType } from "../../../types/types";


describe("profile reducer test", ()=> {
    let state: ProfilePageStateType
    beforeEach(()=> {
        state = {
            posts: [
                {id: uuid(), message: "It's my first post", likeCounter: 333},
                {id: uuid(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
            ] as PostType[],
            profile: null as ProfileType | null,
            status: ""
        }
    })
    it("new post should be added", ()=> {
        let action = addPostAC({message: "new post"})
        let newState = profileReducer(state, action)

        expect(newState.posts.length === 3).toBeTruthy()
        expect(newState.posts[2].message).toBe("new post")

    })
})
