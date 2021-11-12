import React from "react";
import s from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueIem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControl/FormsControl";
import {
  maxLengthCreator,
  requiredField,
} from "../utils/validators/validators";

const Dialogues = (props) => {
  let state = props.dialogues_page;

  let dialogues_elements = state.dialogues.map((d) => (
    <DialogueItem key={d.id} name={d.name} id={d.id} />
  ));

  let messages_elements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  let addNewMessage = (values) => {
    props.send_message(values.newMessageText);
  };

  return (
    <div className={s.dialogues}>
      <div className={s.dialogue_items}>{dialogues_elements}</div>
      <div className={s.messages}>{messages_elements}</div>
      <div className={s.send_message}>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
let messageLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[requiredField, messageLength100]}
          name="newMessageText"
          placeholder="Напишите сообщение..."
          rows="5"
          cols="50"
        />
      </div>
      <button className={s.submitButton}>Отправить</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogueAddMessageForm" })(
  AddMessageForm
);

export default Dialogues;
