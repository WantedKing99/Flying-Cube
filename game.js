const express = require('express')
const router = express.Router()

router.get('/game', function (req, res) {
     res.render('game')
})

router.get('/high-score', function (req, res) {
    res.render('high-score')
})

router.get('/about-us', function (req, res) {
    res.render('about-us')
})

module.exports = router