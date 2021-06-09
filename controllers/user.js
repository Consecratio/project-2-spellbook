const express = require('express')
const router = express.Router()

// GET /user/:uId -- returns home page for the logged in user of :uId
router.get('/:uId', (req, res) => {
    console.log(req.params.uId)
    res.render('user/index')
})

module.exports = router