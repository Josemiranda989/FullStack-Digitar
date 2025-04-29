import React from "react";
import logo from "../assets/react.svg";
import style from "./Navbar.module.css";

export const Navbar = (props) => {
  return (
    <div className={style.navbar}>
      <img src={logo} alt="logo" />

      <ul className={style.links}>
        {props.userLogged.admin && <li>{props.userLogged.nombre}</li>}
        {props.userLogged.admin && <li>AdminPanel</li>}
        <li>Iniciar sesion</li>
        <li>Registrarse</li>
      </ul>
    </div>
  );
};
