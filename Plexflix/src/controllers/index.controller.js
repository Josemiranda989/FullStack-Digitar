const db = require("../database/models");
const Op = db.Sequelize.Op;


module.exports = {
  home: async (req, res) => {
    
/*     db.Movie.findAll()
     .then(movies => res.render('home.ejs', {movies}))
      .catch(error => {
        console.log(error);        
      }) */

    try {
      const movies = await db.Movie.findAll()
      const images = await db.Image.findAll()
      res.json({
        movies: movies,
        images: images
      })
      // res.render('home', {movies})
    } catch (error) {
      console.log(error);      
    }
    
  },
  newMovie: (req, res) => {
    res.render("newMovie");
  },
  updateMovie: (req, res) => {
    res.render("updateMovie");
  },
  detailMovie: (req, res) => {

    db.Movie.findByPk(req.params.id)
      .then((movie)=>{        
        res.render("detailMovie", {movie});        
      } )
  },
  practica: async (req, res) => {
    const movies = await db.Movie.findAll({
      where: {
        title: {[Op.like]:'%u%'}
      }
     })      
       res.render('home', {movies})
  }
};




/* Devuelve un array de todos los elementos del modelo 
      db.Movie.findAll()
      .then(movies =>{
        res.json(movies)
      })    
       */

    /* 
    // Devuelve una fila que cumple con la coincidencia
    db.Movie.findOne({
      where: {
        title: 'Inception',
      },
    }).then((movie) => {
      res.json(movie);
    });
    */

/*     // Devuelve la coincidencia con la pk
    db.Movie.findByPk(1)
      .then((movie) => {
        res.json(movie);
      })
      .catch((e) => {
        console.log(e);
      }); */



      /* 
db.Movie.findAll({
  where: {
    title: {[Op.like]:'%u%'}
  }
 })
  .then(movies => {
    res.render('home', {movies})
  })
     */

  /* 
  db.Movie.findAll({
   order: [['title', 'ASC']],
   offset: 5,
   limit: 10
  })
  */