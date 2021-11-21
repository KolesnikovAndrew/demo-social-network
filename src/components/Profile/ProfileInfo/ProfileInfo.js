import React, { useState } from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";

import userphoto from "../../../assets/images/userphoto.png";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  aboutMe,
  facebook,
  lookingForAJob,
  lookingForAJobDescription,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={s.description_block}>
        <div className={s.infoSection}>
          <span className={s.userName}>{profile.fullName}</span>

          <ProfileStatus
            status={status}
            updateStatus={updateStatus}
            onSubmit={onSubmit}
          />

          <img
            className={s.profilePhoto}
            src={profile.photos.large || userphoto}
          />

          {isOwner && (
            <input type={"file"} onChange={onMainPhotoSelected}></input>
          )}
        </div>
        <div className={s.additionalInfoSection}>
          {editMode ? (
            <ProfileDataForm
              initialValues={profile}
              onSubmit={onSubmit}
              profile={profile}
            />
          ) : (
            <ProfileData
              activateEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div>
      <div>{isOwner && <button onClick={activateEditMode}>edit</button>}</div>
      <b>About me: {profile.aboutMe}</b>

      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <p>My proffessional skills: {profile.lookingForAJobDescription}</p>
        </div>
      )}
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
