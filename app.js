const express  = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routers/userRouter')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:true
  }))
app.use('/',userRouter)

module.exports = app