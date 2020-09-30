//              Dialogs page ACTIONS
//
//
//
//
//
export enum ACTIONS_TYPE {
    ADD_MESSAGE = "Dialogs/ADD-MESSAGE",
}

const makeAction = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;


export type AddMessagePayloadType = {
    message: string
}
export const addMessageAC = makeAction<ACTIONS_TYPE.ADD_MESSAGE, AddMessagePayloadType>(ACTIONS_TYPE.ADD_MESSAGE)

const DialogsPageActions = {
    addMessageAC
}

export type DialogsActionTypes = IActionUnion<typeof DialogsPageActions>
