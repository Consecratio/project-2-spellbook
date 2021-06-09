const express = require('express')
const router = express.Router()
const axios = require('axios')

// GET /spells -- returns all spells from D&D API
router.get('/', (req, res) => {
    axios.get('https://www.dnd5eapi.co/api/spells')
        .then(resFromApi => {
            console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
            let listOfSpells = resFromApi.data.results
            res.render('spells/index', { spells: listOfSpells })
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router