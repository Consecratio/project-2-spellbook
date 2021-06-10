const express = require('express')
const router = express.Router()
const axios = require('axios')
const { response } = require('express')

// GET /spells -- returns all spells from D&D API
router.get('/', (req, res) => {
    axios.get('https://www.dnd5eapi.co/api/spells')
        .then(resFromApi => {
            let listOfSpells = resFromApi.data.results

            /* USE IF YOU WANT DESCRIPTIONS ON THE CARDS
            // let listOfSpells = resFromApi.data.results.map(result => {
            //     return axios.get(`https://www.dnd5eapi.co${result.url}`)
            // })

            // Promise.allSettled(listOfSpells).then(newResponse => {
            //     res.render('spells/index', { spells: newResponse })
            // })
            */

            res.render('spells/index', { spells: listOfSpells })
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router