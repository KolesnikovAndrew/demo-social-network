import dialoguesReducer from "./dialogues-reducer";
import profileReducer from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Привет. Это мой первый пост!", likescount: "12" },
        { id: 2, message: "СВОБОДУ ХОВАНСКОМУ!!!!", likescount: "0" },
        { id: 3, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 4, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 5, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 6, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 7, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 8, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 9, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 10, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 11, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 12, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 13, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 14, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 15, message: "АБАЛДЕТЬ", likescount: "16" },
        { id: 16, message: "АБАЛДЕТЬ", likescount: "16" },
      ],
      new_post_text: "Что у вас нового?",
    },
    messagesPage: {
      dialogues: [
        { id: 1, name: "Камилла" },
        { id: 2, name: "Рената" },
        { id: 3, name: "Полина" },
        { id: 4, name: "Юра" },
        { id: 5, name: "Мама" },
      ],
      messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Как дела" },
        { id: 3, message: "Что делаешь" },
        { id: 4, message: "Привет" },
        { id: 5, message: "Привет" },
        { id: 6, message: "Привет" },
      ],
      new_message_text: "",
    },
    sidebar: {},
  },
  _callsubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.profilePage, action);
    this._state.messagesPage = dialoguesReducer(
      this._state.messagesPage,
      action
    );
    this._callsubscriber(this._state);
  },
};

export default store;
