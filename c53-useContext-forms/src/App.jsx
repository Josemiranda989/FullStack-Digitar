import "./App.css";
import { FormularioProducto } from "./components/FormularioProducto";
import { ListadoProductos } from "./components/ListadoProductos";
import { ProductoProvider } from "./context/ProductoContext";

function App() {
  return (
    <ProductoProvider>
      <h1>Clase 53 - Forms</h1>
      <hr />
      {/* Form */}
      <FormularioProducto />
      {/* Listado de productos */}
      <ListadoProductos />
    </ProductoProvider>
  );
}

export default App;
