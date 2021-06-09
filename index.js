// USE DOTENV
require('dotenv').config()
// REQUIRED PACKAGES
const express = require('express')
const layouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const db = require('./models')


// SERVER CONFIG
const app = express()
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')

// MIDDLEWARES
// enables ejs layouts middleware
app.use(layouts)
// specifies the location of the public assets folder
app.use(express.static('public'))
// sets up body-parser for parsing form data
app.use(express.urlencoded({ extended: false }))
// allows us to UPDATE and DELETE using ?method=UPDATE/DELETE in forms
app.use(methodOverride('_method'))

// create home route
app.get('/', (req, res) => {
    res.render('index')
})

// CONTROLLERS
app.use('/user', require('./controllers/user'))
app.use('/spells', require('./controllers/spells'))

// LISTENER
app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`)
})