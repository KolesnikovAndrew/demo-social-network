import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.img} src={logo} />

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Выйти</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Войти</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
