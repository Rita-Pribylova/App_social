import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'First post', likesCount: 15 }
      ],
      newPostText: 'Hello'
    },
    dialogsPage: {
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
      newMessageBody: ''
    },
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;

  },

  subscribe(observer) {
    this._callSubscriber = observer;

  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;