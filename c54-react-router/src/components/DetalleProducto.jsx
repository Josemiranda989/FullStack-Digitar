import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductoContext } from "../context/ProductoContext";

export const DetalleProducto = () => {
  const { id } = useParams();
  const { productos } = useContext(ProductoContext);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    setProducto(productos.find((item) => item.id == id));
  }, [id, productos]);

  return (
    <>
      {producto ? (
        <ul>
          <li>{producto.nombre}</li>
          <li>{producto.precio}</li>
        </ul>
      ) : (
        <p>El producto no existe</p>
      )}
    </>
  );
};
