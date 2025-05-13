import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/productos">Productos</Link>
      </li>
      <li>
        <Link to="/nuevo-producto">Nuevo Producto</Link>
      </li>
      <li>
        <Link to="/comentarios">Comentarios</Link>
      </li>
    </ul>
  );
};
