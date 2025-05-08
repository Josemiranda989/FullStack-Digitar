import React, { useState, useContext } from "react";
import { ProductoContext } from "../context/ProductoContext";

export const FormularioProducto = () => {
  const { agregarProducto } = useContext(ProductoContext);

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nombre == "" || form.precio == "") {
      return alert("Campos incompletos");
    }
    agregarProducto(form);
    setForm({
      nombre: "",
      precio: "",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          type="text"
        />
        <br />
        <label htmlFor="precio">Precio: </label>
        <input
          id="precio"
          name="precio"
          value={form.precio}
          onChange={handleChange}
          type="number"
        />
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );
};
