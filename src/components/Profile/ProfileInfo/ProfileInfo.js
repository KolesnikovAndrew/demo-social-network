import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";

import userphoto from "../../../assets/images/userphoto.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  aboutMe,
  facebook,
  lookingForAJob,
  lookingForAJobDescription,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.description_block}>
        <div className={s.infoSection}>
          <span className={s.userName}>{profile.fullName}</span>

          <ProfileStatus status={status} updateStatus={updateStatus} />

          <img
            className={s.profilePhoto}
            src={
              profile.photos.large != null ? profile.photos.large : userphoto
            }
          />
        </div>
        <div className={s.additionalInfoSection}>
          <span>Обо мне: {profile.aboutMe}</span>
          <p>Контакты:</p>
          <span>{profile.contacts.facebook}</span>
          <p>{profile.lookingForAJob}</p>
          <p>Статус поиска работы: {profile.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
