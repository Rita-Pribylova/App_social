import profileReducer, { actions } from "./profile-reducer"; 

    let state = {
    posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'First post', likesCount: 15 }
    ],
    profile: null,
    status: '',
    newPostText: ''
};   

test('new post should be added', () => {
    // 1. test data
    let action = actions.addPostActionCreator("new test post");

// 2. action
let newState = profileReducer(state, action);

// 3. expectation
expect(newState.posts.length).toBe(3);
  });


  test('after deleting length of messages should be decrement', () => {
    // 1. указываем creator
    let action = actions.deletePost(1);

// 2. action
let newState = profileReducer(state, action);

// 3. expectation
expect(newState.posts.length).toBe(1);
  });