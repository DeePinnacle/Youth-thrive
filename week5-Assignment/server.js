const express = require('express');
const { 
    handleGetProducts,
    handlePostProducts
 } = require("./controllers/controllers")

const app = express()


app.use(express.json())

app.get('/products', handleGetProducts )

app.post('/add-product', handlePostProducts)


app.listen(5000, ()=>{
    console.log('server started')
})