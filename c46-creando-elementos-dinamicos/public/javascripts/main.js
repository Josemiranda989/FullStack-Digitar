window.onload = () => {
  //   alert("vinculado");

  const usuarios = [
    { id: 1, nombre: "José", rol: "administrador" },
    { id: 2, nombre: "María", rol: "editor" },
    { id: 3, nombre: "Luis", rol: "usuario" },
  ];

  const container = document.querySelector("#container");

  const tbody = document.querySelector("#user-table > tbody");

  //   usuarios.forEach((usuario) => {
  //     tbody.innerHTML += `
  //         <tr>
  //         <td>${usuario.id}</td>
  //         <td>${usuario.nombre}</td>
  //         <td>${usuario.rol}</td>
  //         </tr>`;
  //   });

  setTimeout(() => {
    usuarios.forEach((usr) => {
      const tr = document.createElement("tr");
      const tdId = document.createElement("td");
      const tdName = document.createElement("td");
      const tdRol = document.createElement("td");
      tdId.innerHTML = usr.id;
      tdName.innerHTML = usr.nombre;
      tdRol.innerHTML = usr.rol;
      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdRol);
      tbody.appendChild(tr);
    });
  }, 2000);

  setTimeout(() => {
    document.querySelector("footer").remove();
  }, 5000);

  /*
   VALIDATIONS
  */
  const $ = (item) => document.querySelector(item);

  const form = $("#form");
  const name = $("#name");
  const email = $("#email");
  const password = $("#password");
  const number = $("#number");

  form.onsubmit = (event) => {
    event.preventDefault();

    if (validator.isEmail(email.value)) {
      console.log("El email es correcto");
      form.submit();
    }
  };

  const result = validator.isEmail(email.value);
  console.log(result);
};

/* 
    <tr>
            <td>1</td>
            <td>Jose</td>
            <td>Admin</td>
    </tr>

*/
