import {uuid} from "uuidv4";
import {
    ProfilePageStateType,
    profileReducer,
} from "../reducers/profile-page-reducer";
import { deletePostAC, addPostAC, addLikeAC } from "../reducers/actions/profile-actions";


describe("profile-page reducer test", () => {
    const postId1=uuid();
    const postId2=uuid();

    let startState: ProfilePageStateType
    beforeEach(()=>{
        startState={
            posts: [
                {id: postId1, message: "It's my first post", likeCounter: 333},
                {id: postId2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 3}
            ],
            profile: null,
            status: ""
        }
    })

    test('correct post should be deleted from correct array', () => {

        const action = deletePostAC({postId: postId1});

        const endState = profileReducer(startState, action)

        expect(endState.posts.length).toBe(1);
        expect(endState.posts[0].id).toBe(postId2);
    });
    test('correct post should be added to correct array', () => {

        const action = addPostAC({message: "It's my first post"});

        const endState = profileReducer(startState, action)

        expect(endState.posts.length).toBe(3);
        expect(endState.posts[0].id).toBe(postId1)
        expect(endState.posts[2].id).toBeDefined();
        expect(endState.posts[2].message).toBe("It's my first post");
        expect(endState.posts[2].likeCounter).toBe(0);
    })
    test('likeCouter should be changed +1', () => {

        const action = addLikeAC({postId: postId2});

        const endState = profileReducer(startState, action)

        expect(endState.posts[1].likeCounter).toBe(4);
    });
})


