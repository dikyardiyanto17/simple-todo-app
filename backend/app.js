const cors = require('cors')
const express = require('express')
const errorHandler = require('./middlewares/errorHandlers')
const router = require('./routes')
const app = express()
const port = 3000

app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
    console.log("App on port " + port)
})