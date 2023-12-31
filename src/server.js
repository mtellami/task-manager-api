const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
require('./db/mongoose')

const userRouter = require("./api/routes/user")

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(userRouter)

app.listen(port, () => console.log(`server is running on port ${port}`))
