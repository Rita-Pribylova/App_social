import { InferActionTypes } from "./redux-store"

type DialogsType = {
  id: number
  name: string
}

type MessagesType = {
  id: number
  message: string
}

let initialState = {
    dialogs: [
      { id: 1, name: 'Dmitry' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Victor' },
      { id: 4, name: 'Nina' },
      { id: 5, name: 'Alex' }
    ] as Array <DialogsType>,
    messages: [
      { id: 1, message: 'Hi, how are you' },
      { id: 2, message: 'How are you doing?' },
      { id: 3, message: 'Good day' },
      { id: 4, message: 'Fine' },
      { id: 5, message: 'Hello' }
    ] as Array <MessagesType>,
  }

const dialogsReducer = (state = initialState, action: ActionsType): IninisialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
              ...state,
              messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const actions = {
  sendMessage: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody } as const)
}

export default dialogsReducer;

export type IninisialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>