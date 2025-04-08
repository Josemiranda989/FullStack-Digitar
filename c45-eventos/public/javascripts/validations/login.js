window.onload = () => {
  const form = document.querySelector("form");

  //   console.log(email, password, btn, form);

  form.onsubmit = (event) => {
    event.preventDefault();
    const errList = document.querySelector(".errors");
    let errors = [];

    if (!form.email.value) {
      errors.push("Para continuar debes ingresar un mail");
    }

    if (!form.password.value) {
      errors.push("Para continuar debes ingresar un password");
    }

    form.password.onkeypress = (event) => {
      console.log(form.password.value);
      if (form.password.value.length < 6) {
        form.password.style.border = "thick solid red";
      } else {
        form.password.style.border = "thick solid green";
      }
    };

    if (errors.length > 0) {
      errList.innerHTML = "";
      errors.forEach((error) => {
        errList.innerHTML += `<li class="text-danger">${error}</li>`;
      });
    } else {
      form.submit();
    }
  };
};
