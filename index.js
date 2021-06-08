// use dotenv
require('dotenv').config()
// bring in express
const express = require('express')

// server config
const app = express()
const PORT = process.env.PORT || 3000

// create home route
app.get('/', (req, res) => {
    res.send("Success!")
})

// have server listen
app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`)
})