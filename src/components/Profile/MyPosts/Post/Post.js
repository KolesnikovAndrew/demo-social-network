import React from "react";
import s from "./Post.module.css";
import userphoto from "../../../../assets/images/userphoto.png";
import like from "../../../../assets/images/like.png";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.itemPhoto} src={userphoto} />
      <div className={s.likeSection}>
        <div className={s.itemMessage}>{props.message}</div>
        <span>
          Нравится
          <img className={s.itemLike} src={like} />
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Post;
