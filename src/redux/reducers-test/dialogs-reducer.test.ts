import {dialogsReducer, DialogsPageStateType} from "../reducers/dialogs-reducer";
import {v1} from "uuid";
import { addMessageAC } from "../reducers/actions/dialogs-actions";

describe("dialogs-page reducer test", () => {

    let startState: DialogsPageStateType = {dialogs: [], messages: []}
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
        }
    })

    test('correct message should be added to correct array', () => {

        const action = addMessageAC({message:"i'm new message text"});

        const endState = dialogsReducer(startState, action)

        expect(endState.messages.length).toBe(5);
        expect(endState.messages[4].id).toBeDefined();
        expect(endState.messages[4].message).toBe("i'm new message text");
    })
})

