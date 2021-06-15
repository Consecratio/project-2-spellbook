// USE DOTENV
require('dotenv').config()
// REQUIRED PACKAGES
const express = require('express')
const layouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const rowdy = require('rowdy-logger')
const db = require('./models')


// SERVER CONFIG
const app = express()
const rowdyResults = rowdy.begin(app)
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

// ROUTES

// GET '/' -- create home route
app.get('/', (req, res) => {
    res.render('index')
})

// POST '/' -- create new user in the database
app.post('/', (req, res) => {
    // get new data from sign up form
    db.user.findOrCreate({
        // check if email already exists
        where: {
            email: req.body.signUpEmail
        },
        defaults: {
            firstName: req.body.signUpFirstName,
            lastName: req.body.signUpLastName,
            email: req.body.signUpEmail,
            password: req.body.signUpPassword
        }
    }).then(([newUser, created]) => {
        if(!created) {
            // user already in db, send back to home page for sign in
            res.render('index', { userExists: true})
        } else {
            // if email is not in db then create new user
            console.log(newUser)
            // redirect to /user controller
            res.redirect(`user/${newUser.id}`)
        }
    }).catch(err => {
        console.log(err)
    })
})

app.get('/signin', (req, res) => {
    let logInEmail = req.query.signInEmail
    let logInPass = req.query.signInPassword
    
    // find user with email
    db.user.findOne({
        where: {
            email: logInEmail
        }
    }).then(user => {
        if(user === null || user.password !== logInPass){
            // email doesn't exist in db OR password doesn't match pass in db
            res.render('index', { noUserFound: true })
        } else if(user.password === logInPass){
            // user and password match
            res.redirect(`/user/${user.id}`)
        }
    })
})

// CONTROLLERS
app.use('/user', require('./controllers/user'))
app.use('/spells', require('./controllers/spells'))

// LISTENER
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`You are listening on port ${PORT}`)
})