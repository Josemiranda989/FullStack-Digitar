module.exports = {
    home:  (req, res) => {
        res.render('home')
      },
      newMovie:  (req, res) => {
        res.render('newMovie')
      },
      updateMovie:  (req, res) => {
        res.render('updateMovie')
      },
      detailMovie:  (req, res) => {
        res.render('detailMovie')
      },
}