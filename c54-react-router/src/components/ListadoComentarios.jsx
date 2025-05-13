import React, { useEffect, useState } from "react";

export const ListadoComentarios = () => {
  const [comentarios, setComentarios] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=5`
    )
      .then((res) => res.json())
      .then((data) => {
        setComentarios(data);
      })
      .catch((e) => console.error(e));
  }, [page]);

  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(page - 1);

  return (
    <div>
      <h3>Listado de comentarios</h3>
      <ul>
        {comentarios ? (
          comentarios.map((item) => (
            <li key={item.id}>
              {item.id}- {item.email}: {item.name}
            </li>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </ul>
      {page > 1 && <button onClick={previousPage}>{page - 1}</button>}
      <button disabled>{page}</button>
      <button onClick={nextPage}>{page + 1}</button>
    </div>
  );
};
