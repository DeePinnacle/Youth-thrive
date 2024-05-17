const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const eventRoutes = require('./routes/routes')

const app = express()

const PORT = process.env.PORT

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/event-booking/api', eventRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`connected to mongodb and listening to port ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})
