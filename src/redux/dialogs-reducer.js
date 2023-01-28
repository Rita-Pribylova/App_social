const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
      { id: 1, name: 'Dmitry' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Victor' },
      { id: 4, name: 'Nina' },
      { id: 5, name: 'Alex' }
    ],
    messages: [
      { id: 1, message: 'Hi, how are you' },
      { id: 2, message: 'How are you doing?' },
      { id: 3, message: 'Good day' },
      { id: 4, message: 'Fine' },
      { id: 5, message: 'Hello' }
    ],
  };

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
              ...state,
              messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;