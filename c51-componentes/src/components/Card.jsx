import React from "react";

export const Card = ({ prod }) => {
  return (
    <article
      className="w-40 border-amber-50 border-2 flex justify-center "
      key={prod.id}
    >
      <h5>{prod.nombre}</h5>
      <p>{prod.precio}</p>
    </article>
  );
};
