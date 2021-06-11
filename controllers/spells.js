const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')

// GET /spells/:id -- returns all spells from D&D API
router.get('/:id', (req, res) => {
    // find user to pass userId to page
    let userId = req.params.id
    let userBooks

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

            // get list of spellbooks owned by user
            db.spellbook.findAll({
                where: {
                    userId: userId
                }
            }).then(books => {
                userBooks = books
                res.render('spells/index', {
                    spells: listOfSpells,
                    books: userBooks
                })
            })

        }).catch(err => {
            console.log(err)
        })
})

module.exports = router