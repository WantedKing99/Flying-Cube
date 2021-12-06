const express = require('express')
const app = express()

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
 res.render('index')
})

const gameRouter = require('./routes/game')

app.use('/', gameRouter)

app.listen(3000)
