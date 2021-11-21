import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import s from "./Preloader.module.css";
let Preloader = (props) => {
  return (
    <div className={s.preloaderContainer}>
      <img src={preloader} className={s.preloader} />
    </div>
  );
};

export default Preloader;
