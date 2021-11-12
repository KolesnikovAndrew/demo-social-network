const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

export const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let messageText = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: messageText }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialoguesReducer;
