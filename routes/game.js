const express = require('express')
const router = express.Router()

router.get('/game', function (req, res) {
    // /:topScore res.send('Top score'+req.params.topScore)
     res.render('game')
})

router.get('/high-score', function (req, res) {
    res.render('high-score')
})

router.get('/about-us', function (req, res) {
    res.render('about-us')
})

// router.get("/", (req, res) => {
//   console.log(req.query.name)
//   res.send("User List")
// })

module.exports = router