import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Моя страница
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogues" activeClassName={s.active}>
          Сообщения
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>
          Пользователи
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          Новости
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music" activeClassName={s.active}>
          Музыка
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          Настройки
        </NavLink>
      </div>
      <div className={s.item}>
        <a href="www.google.com" activeClassName={s.active}>
          Реклама
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
