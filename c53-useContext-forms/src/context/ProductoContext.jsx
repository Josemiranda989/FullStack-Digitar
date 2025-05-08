import { createContext, useState } from "react";

export const ProductoContext = createContext();

export function ProductoProvider({ children }) {
  const [productos, setProductos] = useState([
    {
      nombre: "Proyector Sony",
      precio: 110,
    },
    {
      nombre: "Mini PC HP",
      precio: 359,
    },
  ]);

  const agregarProducto = (producto) => {
    setProductos((previo) => [...previo, producto]);
  };

  return (
    <ProductoContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </ProductoContext.Provider>
  );
}
