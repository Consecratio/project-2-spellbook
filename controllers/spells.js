const express = require('express')
const router = express.Router()

// GET /spells -- returns all spells from D&D API
router.get('/', (req, res) => {
    res.render('spells/index')
})

module.exports = router