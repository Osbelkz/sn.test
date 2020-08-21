import {uuid} from "uuidv4";
import {
    addLikeAC,
    addPostAC,
    deletePostAC,
    ProfilePageStateType,
    profileReducer,
    updateNewPostTextAC
} from "../profile-page-reducer";


describe("profile-page reducer test", () => {
    const postId1=uuid();
    const postId2=uuid();

    let startState: ProfilePageStateType = {posts: [], newPostText: ''}
    beforeEach(()=>{
        startState={
            posts: [
                {id: postId1, message: "It's my first post", likeCounter: 333},
                {id: postId2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 3}
            ],
            newPostText: 'I like add post'
        }
    })

    test('correct post should be deleted from correct array', () => {

        let startState: ProfilePageStateType = {
            posts: [
                {id: postId1, message: "It's my first post", likeCounter: 333},
                {id: postId2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
            ],
            newPostText: ''
        }

        const action = deletePostAC(postId1);

        const endState = profileReducer(startState, action)

        expect(endState.posts.length).toBe(1);
        expect(endState.posts[0].id).toBe(postId2);
    });
    test('correct post should be added to correct array', () => {

        const action = addPostAC();

        const endState = profileReducer(startState, action)

        expect(endState.posts.length).toBe(3);
        expect(endState.posts[0].id).toBe(postId1)
        expect(endState.posts[2].id).toBeDefined();
        expect(endState.posts[2].message).toBe('I like add post');
        expect(endState.posts[2].likeCounter).toBe(0);
    })
    test('likeCouter should be changed +1', () => {

        const action = addLikeAC(postId2);

        const endState = profileReducer(startState, action)

        expect(endState.posts[1].likeCounter).toBe(4);
    });
    test('new post text should be changed', () => {

        const action = updateNewPostTextAC("new post text was changed");

        const endState = profileReducer(startState, action)

        expect(endState.newPostText).toBe("new post text was changed");
    });
})


