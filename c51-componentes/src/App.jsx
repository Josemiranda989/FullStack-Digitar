import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";

function App() {
  const productosLimpieza = [
    {
      id: 1,
      nombre: "Detergente líquido",
      imagen: "https://source.unsplash.com/200x200/?detergent",
      precio: 200,
    },
    {
      id: 2,
      nombre: "Lavandina",
      imagen: "https://source.unsplash.com/200x200/?bleach",
      precio: 200,
    },
    {
      id: 3,
      nombre: "Desinfectante",
      imagen: "https://source.unsplash.com/200x200/?disinfectant",
      precio: 200,
    },
    {
      id: 4,
      nombre: "Jabón en polvo",
      imagen: "https://source.unsplash.com/200x200/?soap",
      precio: 200,
    },
    {
      id: 5,
      nombre: "Esponja de cocina",
      imagen: "https://source.unsplash.com/200x200/?sponge",
      precio: 200,
    },
  ];
  const productoMasVendido = {
    id: 1,
    nombre: "Detergente líquido multiuso",
    imagen: "https://source.unsplash.com/200x200/?detergent",
    descripcion:
      "El detergente líquido multiuso es el favorito de los consumidores por su versatilidad y eficacia. Puede usarse para lavar platos, limpiar superficies y hasta ropa, ofreciendo un rendimiento óptimo en diferentes tareas del hogar. Su fórmula concentrada ayuda a eliminar grasa y suciedad con facilidad, lo que lo convierte en un imprescindible en cualquier hogar.",
  };
  const userLogged = {
    id: 1,
    nombre: "José",
    admin: true,
  };

  return (
    <>
      <Navbar userLogged={userLogged} />
      <h1>Clase 51 - Componentes</h1>
      <h1 class="text-3xl text-amber-300 font-bold underline">Hello world!</h1>

      <Products
        productos={productosLimpieza}
        productoMasVendido={productoMasVendido}
      />
      <Footer />
    </>
  );
}

export default App;
