import React from "react";
import styles from "./users.module.css";
import userphoto from "../../assets/images/userphoto.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let User = ({ user, followingInProgress, unfollow, follow, ...props }) => {
  return (
    <div className={styles.user}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userphoto}
              className={styles.usersPhoto}
            />
          </NavLink>
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"Город не указан"}</div>
          <div>{"Страна не указана"}</div>
        </span>
      </span>
      {user.followed ? (
        <button
          className={styles.submitButton}
          disabled={followingInProgress.some((id) => id === user.id)}
          onClick={() => {
            unfollow(user.id);
          }}
        >
          Отписаться
        </button>
      ) : (
        <button
          className={styles.submitButton}
          disabled={followingInProgress.some((id) => id === user.id)}
          onClick={() => {
            follow(user.id);
          }}
        >
          Подписаться
        </button>
      )}
    </div>
  );
};

export default User;
