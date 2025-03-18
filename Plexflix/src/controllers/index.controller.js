const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  home: async (req, res) => {
    try {
      const movies = await db.Movie.findAll({
        include: [
        {association: "images"},
        {association: "actors"},
        {association: "directors"},
        ]
        });
        res.json(movies)
      // res.render("home.ejs", { movies });
    } catch (error) {
      console.log(error);
    }
  },
  newMovie: (req, res) => {
    res.render("newMovie");
  },
  processCreate: async (req, res) => {
    try {
      const { title, description, length, release_date, rating } = req.body;

      const newMovie = await db.Movie.create({
        title,
        description,
        length,
        release_date,
        rating,
      });

      const urlImagen = "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/07/hipertextual-diez-anos-inception-extrana-mirada-nolan-sobre-realidad-siguevigente-2020650351-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1"
      if(urlImagen) { //if (req.file)
        await db.Image.create({
          URL: urlImagen, //req.file.filename
          movies_id: newMovie.id
        })
      }
      res.redirect('/')
    } catch (error) {
      console.log(error)
    }
  },
  updateMovie: (req, res) => {
    res.render("updateMovie");
  },
  detailMovie: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movie) => {
      res.render("detailMovie", { movie });
    });
  },
  practica: async (req, res) => {
    const movies = await db.Movie.findAll({
      where: {
        title: { [Op.like]: "%u%" },
      },
    });
    res.render("home", { movies });
  },
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

/* 
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
  */


  /* Create sin relacion al modelo de movieImages
    processCreate: async (req, res) => {
  try {
    const { title, description, length, release_date, rating } = req.body;
    const newMovie = await db.Movie.create({
      title,
      description,
      length,
      release_date,
      rating,
    });

    // console.log(newMovie);
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}, */