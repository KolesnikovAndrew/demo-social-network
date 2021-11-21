const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogues: [
    { id: 1, name: "Camille" },
    { id: 2, name: "Alex" },
    { id: 3, name: "John" },
    { id: 4, name: "Mother" },
    { id: 5, name: "X Æ A-12" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How do you do?" },
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
