const autosImportados = require("./autos.js");

const concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    const autoEncontrado = this.autos.find((auto) => auto.patente == patente);
    return autoEncontrado ? autoEncontrado : null;
    /* if (autoEncontrado) {
        return autoEncontrado;
      } else {
        return null;
      } */
  },
  venderAuto: function (patente) {
    const auto = this.buscarAuto(patente);
    auto.vendido == false ? (auto.vendido = true) : null;
    // if (auto) {
    //   auto.vendido = true;
    // } else {
    //   return null;
    // }
  },
  autosParaLaVenta: function () {
    return this.autos.filter((auto) => auto.vendido == false);
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter((auto) => auto.km < 100);
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter((auto) => auto.vendido == true);
    let listaDeVentas = autosVendidos.map((auto) => auto.precio);
    return listaDeVentas;
  },
  totalDeVentas: function () {
    let listaDeVentas = this.listaDeVentas();
    return listaDeVentas.reduce((total, current) => {
      return total + current;
    }, 0);
  },
  puedeComprar: function (auto, persona) {
    let pagoPorCuotaDelAuto = auto.precio / auto.cuotas;
    let cumpleConCuotas =
      persona.capacidadDePagoEnCuotas >= pagoPorCuotaDelAuto;
    let cumpleConPrecioTotal = persona.capacidadDePagoTotal >= auto.precio;
    let puedeComprar = cumpleConCuotas && cumpleConPrecioTotal;
    return puedeComprar;
  },
};

// let persona = {
//   nombre: "Leon",
//   capacidadDePagoEnCuotas: 200000,
//   capacidadDePagoTotal: 100000000,
// };
// concesionaria.venderAuto("APL123");
// console.log(concesionaria.puedeComprar(autosImportados[4], persona));

/* 

Instrucciones

Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?

3) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

*/
