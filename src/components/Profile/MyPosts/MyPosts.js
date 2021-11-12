import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControl/FormsControl";
import {
  requiredField,
  maxLengthCreator,
} from "../../utils/validators/validators";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPostText"}
          component={Textarea}
          validate={[requiredField, maxLength10]}
        />
      </div>
      <div>
        <button className={s.submitButton}>Опубликовать</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = React.memo((props) => {
  console.log("RENDER");

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likescount} id={p.id} />
  ));

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>Мои посты</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
