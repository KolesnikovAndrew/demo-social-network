import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControl/FormsControl";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControl/FormsControl.module.css";
export const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <b>About me: </b> {createField("Full name", "fullName", [], Input)}
      <b>About me: </b> {createField("About me", "aboutMe", [], Textarea)}
      <div>
        <b>Looking for a job:</b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My proffessional skills</b>:
        {createField(
          "My proffessional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className="s.contacts">
              <b>{key}:</b> {createField(key, "contacts." + key, [], Textarea)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
