const indexController = {
  getHome: (req, res) => {
    res.render("home.ejs", {
      textOfBackend: "Feliz Anio nuevo",
    });
  },
};
module.exports = indexController;
