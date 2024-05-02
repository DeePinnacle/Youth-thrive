const express = require("express")
const app = express()
require('dotenv').config()


const PORT = process.env.PORT

// getting response as json
app.get("/json", (req, res)=>{
    res.json({ message: "welcome to the backend" })
})

// getting response as string 
app.get("/string", (req, res)=>{
    res.send("welcome to youth-thrive dev environment")
})

// getting response as an array
app.get("/array", (req, res)=>{
    res.send(["Access Bank", "CareerX", "Youth Thrive", "David Samson", "Kamaldeen"])
})

app.listen(process.env.PORT, ()=>{
    console.log("listening to port 5000");
})
