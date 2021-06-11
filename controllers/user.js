const axios = require('axios')
const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /user/:id -- returns home page for the logged in user of :id
router.get('/:id', (req, res) => {
    let userId = req.params.id

    // get list of spellbooks owned by user
    db.spellbook.findAll({
        where: {
            userId: userId
        }
    }).then(books => {
        res.render('user/index', {
            userId: userId,
            books: books
        })
    })
})

// POST /user/addBook -- add spellbook to user's account
router.post('/addBook', (req, res) => {
    let userId = req.body.userId
    let bookName = req.body.bookName
    let bookDesc = req.body.bookDesc

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
    console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
    let bookId = req.body.spellbookSelect
    let spellName = req.body.spellName

    // add spell from form on /spells/index to spellbook
    db.spellbook.findOne({
        where: {
            id: bookId
        }
    }).then(book => {
        // do an axios request for spell info
        axios.get(`https://www.dnd5eapi.co/api/spells/${spellName}`)
        .then(resFromApi => {
            let data = resFromApi.data
            db.spell.create({
                // bring in spell information
                // TODO: fix spell not pushing into the DB
                name: data.name,
                level: data.level,
                range: data.range,
                duration: data.duration,
                castingTime: data.casting_time,
                classes: data.classes,
                description: data.desc,
                components: data.components,
                material: data.material,
                ritual: data.ritual,
                concentration: data.concentration
            }).then(spell => {
                book.addSpell(spell)
                res.send(`Added ${req.body.spellName} to Spellbook: ${req.body.spellbookSelect}`)
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    }) 
})

// GET /user/spellbook-- view contents of spellbook
router.get('/spellbook/:bookId', (req, res) => {
    let bookId = req.params.bookId

    db.spellbook.findOne({
        where: {
            id: bookId
        },
        include: [db.user, db.spell]
    }).then(book => {
        console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
        console.log(book.spells)
        res.render('user/spellbook', { book: book, spells: book.spells })
    })
})

// DELETE /user/delBook/:id -- delete spellbook from user's account
router.delete('/delBook/:bookId', (req, res) => {
    let userId = req.body.userId
    let bookId = req.params.bookId

    db.spellbook.destroy({
        where: { id: bookId }
    }).then(deleted => {
        res.redirect(`${req.originalUrl.split("/delBook").shift()}/${userId}`)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router