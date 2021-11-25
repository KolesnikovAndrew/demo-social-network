import React, { useState } from "react";
import s from "./Post.module.css";
import userphoto from "../../../../assets/images/userphoto.png";
import like from "../../../../assets/images/like.png";
import Preloader from "../../../common/Preloader/Preloader";
import cn from "classnames";
const Post = (props) => {
  let [addLike, setLike] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  let likesCount = parseInt(props.likesCount);

  return (
    <div className={s.item}>
      <img
        className={s.itemPhoto}
        src={props.profile.photos.small || userphoto}
      />
      <div className={s.likeSection}>
        <div className={s.itemMessage}>{props.message}</div>
        <span className={s.like}>
          <img
            className={(addLike && cn(s.itemLike, s.liked)) || s.itemLike}
            src={like}
            onClick={() => {
              setLike(!addLike);
            }}
          />
          {!addLike && <div>{likesCount}</div>}
          {addLike && <div>{likesCount + 1}</div>}
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Post;
