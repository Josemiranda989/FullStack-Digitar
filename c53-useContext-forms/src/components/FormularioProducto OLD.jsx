import React, { useState } from "react";

export const FormularioProducto = ({ productos, setProductos }) => {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nombre == "" || form.precio == "") {
      return alert("Campos incompletos");
    }
    setProductos([...productos, form]);
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
