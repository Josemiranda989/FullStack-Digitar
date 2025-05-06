import React from "react";
import octoCat from "../assets/octocat.png";
import "./Navbar.css";

export const Publicidad = () => {
  return <p>Publicidad</p>;
};

export const Navbar = () => {
  return (
    <navbar>
      <ul className="ul">
        <img width="100" src={octoCat} alt="" />
        <li>Iniciar Sesion</li>
        <li>Registrarse</li>
      </ul>
    </navbar>
  );
};
