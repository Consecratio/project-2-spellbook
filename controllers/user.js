const express = require('express')
const router = express.Router()

// GET /user/:uId -- returns home page for the logged in user of :uId
router.get('/:uId', (req, res) => {
    if(req.params.uId !== 0){
        res.render('user/index', { user: req.params.uId })
    }
})

// POST /user/addSpell -- add spell from /spells/index to user's spellbook
router.post('/addSpell', (req, res) => {
    console.log(req.body)
    res.send(`Added ${req.body.spellName} to Spellbook: ${req.body.spellbookSelect}`)
})

module.exports = router