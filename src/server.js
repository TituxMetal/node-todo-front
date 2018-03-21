const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
const bodyParser = require('body-parser')

// Initialize express app
const app = express()

// Middlewares bodyParser and public static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/statics', express.static(path.join(__dirname, '../public')))

// View path and hsb settings
const viewPath = path.resolve('./src/templates')
app.set('views', viewPath)
app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: viewPath,
  partialsDir: viewPath + '/partials'
}))
app.set('view engine', 'hbs')

const port = process.env.PORT || 3000

// Home page route
app.get('/', (req, res) => {
  res.render('home')
})

// Todo page route
app.get('/todo', (req, res) => {
  res.render('todos/index')
})

// Login page route
app.get('/login', (req, res) => {
  res.render('auth/login')
})

// Register page route
app.get('/register', (req, res) => {
  res.render('auth/register')
})

// Server listen
app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})
