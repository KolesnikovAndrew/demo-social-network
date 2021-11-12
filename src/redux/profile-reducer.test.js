import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Здравствуйте", likescount: "12" },
    { id: 2, message: "абоба", likescount: "0" },
    { id: 3, message: "фркуты жизни...", likescount: "16" },
  ],
};

it("length of posts should be incremented", () => {
  //test data
  let action = addPostActionCreator("test");

  //action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.posts.length).toBe(4);
});

it("message of new post should be correct", () => {
  //test data
  let action = addPostActionCreator("test");

  //action
  let newState = profileReducer(state, action);
  //expectation

  expect(newState.posts[3].message).toBe("test");
});

it("after deleting, length of messages should be decremented", () => {
  //test data
  let action = deletePost(1);

  //action
  let newState = profileReducer(state, action);
  //expectation

  expect(newState.posts.length).toBe(2);
});
it("after deleting, length of messages should not be decremented if id is incorrect", () => {
  //test data
  let action = deletePost(10000);

  //action
  let newState = profileReducer(state, action);
  //expectation

  expect(newState.posts.length).toBe(3);
});
