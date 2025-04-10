module.exports = {
  /* getHome: function (req, res, next) {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        res.render("index", { title: "Express", categories: data });
      });
  }, */
  getHome: function (req, res, next) {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.provincias);
        res.render("index", { title: "Express", provinces: data.provincias });
      });
  },
};
