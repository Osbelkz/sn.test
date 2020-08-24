import {addMessageAC, DialogsPageStateType, dialogsReducer, updateNewMessageTextAC} from "../reducers/dialogs-reducer";
import {v1} from "uuid";

describe("dialogs-page reducer test", () => {

    let startState: DialogsPageStateType = {dialogs: [], messages: [], newMessageText: ''}
    beforeEach(() => {
        startState = {
            dialogs: [
                {id: v1(), name: "Diko"},
                {id: v1(), name: "Almaz"},
                {id: v1(), name: "Erzhan"},
                {id: v1(), name: "Banzai"}
            ],
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "How are you l"},
                {
                    id: v1(),
                    message: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "
                },
                {id: v1(), message: "Yo"}
            ],
            newMessageText: "i'm new message text"
        }
    })

    // test('correct message should be deleted from correct array', () => {
    //
    //     let startState: ProfilePageStateType = {
    //         posts: [
    //             {id: postId1, message: "It's my first post", likeCounter: 333},
    //             {id: postId2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
    //         ],
    //         newPostText: ''
    //     }
    //
    //     const action = deletePostAC(postId1);
    //
    //     const endState = profileReducer(startState, action)
    //
    //     expect(endState.posts.length).toBe(1);
    //     expect(endState.posts[0].id).toBe(postId2);
    // });
    test('correct message should be added to correct array', () => {

        const action = addMessageAC();

        const endState = dialogsReducer(startState, action)

        expect(endState.messages.length).toBe(5);
        expect(endState.messages[4].id).toBeDefined();
        expect(endState.messages[4].message).toBe("i'm new message text");
    })
    test('new message text should be changed', () => {

        const action = updateNewMessageTextAC("new message text was changed");

        const endState = dialogsReducer(startState, action)

        expect(endState.newMessageText).toBe("new message text was changed");
    });
})

