import React from "react";
import { Card } from "./Card";

export const Products = ({ productoMasVendido, productos }) => {
  console.log(productos);

  return (
    <div className="bg-blue-400">
      <section>
        <h4>Producto Destacado</h4>
        <h5>{productoMasVendido.nombre}</h5>
        <p>{productoMasVendido.descripcion}</p>
        <img src={productoMasVendido.imagen} alt="imagen" />
      </section>
      <section className="bg-blue-800">
        {productos.map((prod) => (
          <article key={prod.id}>
            <h5>{prod.nombre}</h5>
            <p>{prod.precio}</p>
          </article>
        ))}
      </section>

      <section className="bg-amber-900 flex justify-content-center">
        {productos.map((prod) => (
          <Card key={prod.id} prod={prod} />
        ))}
      </section>
    </div>
  );
};
