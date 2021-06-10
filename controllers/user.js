const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /user/:uId -- returns home page for the logged in user of :uId
router.get('/:uId', (req, res) => {
    let userId = req.params.uId

    // get list of spellbooks owned by user
    db.spellbook.findAll({
        where: {
            userId: userId
        }
    }).then(books => {
        console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
        console.log(books)
        console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
        res.render('user/index', {
            userId: userId,
            books: books
        })
    })
})

// POST /user/addBook -- add spellbook to user's account
router.post('/addBook', (req, res) => {
    let bookName = req.body.bookName
    let bookDesc = req.body.bookDesc
    let userId = req.body.userId

    db.spellbook.create({
        userId: userId,
        name: bookName,
        description: bookDesc
    }).then(book => {
        res.redirect(`./${userId}`)
    }).catch(err => {
        console.log(err)
    })
})

// POST /user/addSpell -- add spell from /spells/index to user's spellbook
router.post('/addSpell', (req, res) => {
    console.log(req.body)
    res.send(`Added ${req.body.spellName} to Spellbook: ${req.body.spellbookSelect}`)
})

module.exports = router