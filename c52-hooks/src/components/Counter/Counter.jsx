import React, { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(1);

  let incrementar = () => setContador(contador + 1);
  let decrementar = () => setContador(contador - 1);
  let resetear = () => setContador(1);

  return (
    <div>
      <h3>Contador de clicks: {contador}</h3>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  );
};
