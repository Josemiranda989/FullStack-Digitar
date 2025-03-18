const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// motor de vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'))

// setear carpeta publica
app.use(express.static(path.join(__dirname, '/src/public')))

// Config form
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const indexRoutes = require('./src/routes/index.routes')

app.use('/', indexRoutes)

app.listen(port, () => {
  console.log(`
    ***************
    http://localhost:${port}`)
})