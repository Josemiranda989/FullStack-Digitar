import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FormularioProducto } from "./components/FormularioProducto";
import { ListadoComentarios } from "./components/ListadoComentarios";
import { ListadoProductos } from "./components/ListadoProductos";
import { ProductoProvider } from "./context/ProductoContext";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { DetalleProducto } from "./components/DetalleProducto";

function App() {
  return (
    <ProductoProvider>
      <h1>Clase 54 - React Router DOM</h1>
      <hr />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FormularioProducto />
              <ListadoProductos />
            </>
          }
        />

        {/* Agregar producto */}
        <Route path="/nuevo-producto" element={<FormularioProducto />} />
        {/* Listado de productos */}
        <Route path="/productos" element={<ListadoProductos />} />
        {/* Detalle Producto */}
        <Route path="/producto/:id" element={<DetalleProducto />} />

        {/* Listado de Comentarios */}
        <Route path="/comentarios" element={<ListadoComentarios />} />

        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" Component={NotFound} />
      </Routes>
      {/* Form */}
    </ProductoProvider>
  );
}

export default App;
