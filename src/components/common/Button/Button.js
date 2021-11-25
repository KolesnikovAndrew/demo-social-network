import React from "react";
import s from "./Button.module.css";
export const Button = (props) => {
  return <button className={s.buttonMain}>{props.text}</button>;
};

export default Button;
