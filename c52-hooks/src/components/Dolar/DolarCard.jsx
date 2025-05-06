import React from "react";
import "./DolarCard.css";

export const DolarCard = ({ country }) => {
  return (
    <article className="card">
      <h3>{country.nombre}</h3>
      <div>
        <p>
          Compra {country.compra} {country.moneda}
        </p>
        <p>
          Venta {country.venta} {country.moneda}
        </p>
      </div>
    </article>
  );
};
