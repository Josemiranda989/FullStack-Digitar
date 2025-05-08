import { useState } from "react";
import "./App.css";
import { FormularioProducto } from "./components/FormularioProducto";
import { ListadoProductos } from "./components/ListadoProductos";
function App() {
  const [productos, setProductos] = useState([
    {
      nombre: "Proyector DUB",
      precio: 120,
    },
    {
      nombre: "Mini PC Blackview",
      precio: 259,
    },
  ]);

  return (
    <>
      <h1>Clase 53 - Forms</h1>
      <hr />
      {/* Form */}
      <FormularioProducto productos={productos} setProductos={setProductos} />
      {/* Listado de productos */}
      <ListadoProductos productos={productos} />
    </>
  );
}

export default App;
