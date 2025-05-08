export const ListadoProductos = ({ productos }) => {
  return (
    <div>
      <h3>Listado de Productos</h3>
      <ul>
        {productos.map((p, i) => {
          return (
            <li key={p.nombre + i}>
              {p.nombre} - {p.precio} USD
            </li>
          );
        })}
      </ul>
    </div>
  );
};
