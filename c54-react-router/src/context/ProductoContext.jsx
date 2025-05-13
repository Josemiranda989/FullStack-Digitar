import { createContext, useState } from "react";

export const ProductoContext = createContext();

export function ProductoProvider({ children }) {
  const productList = JSON.parse(localStorage.getItem("productos")) || [];

  const [productos, setProductos] = useState(productList);

  const agregarProducto = (producto) => {
    producto.id = productos[productos.length - 1]?.id + 1 || 1;
    setProductos((previo) => [...previo, producto]);
    localStorage.setItem("productos", JSON.stringify([...productos, producto]));
  };

  return (
    <ProductoContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </ProductoContext.Provider>
  );
}
