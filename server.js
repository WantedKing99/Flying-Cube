const express = require('express')
const app = express()

app.use(express.static("public"))
// app.use(express.urlencoded ({ extended:true }));

app.set('view engine', 'ejs')

const gameRouter = require('./routes/game')

app.use('/', gameRouter)

app.listen(3000)
