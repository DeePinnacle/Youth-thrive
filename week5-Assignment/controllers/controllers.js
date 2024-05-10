const products = [
    {
      "id": 1,
      "name": "Smartphone",
      "brand": "ABC",
      "price": 499.99,
      "stock": 50
    },
    {
      "id": 2,
      "name": "Laptop",
      "brand": "XYZ",
      "price": 899.99,
      "stock": 30
    },
    {
      "id": 3,
      "name": "Headphones",
      "brand": "PQR",
      "price": 79.99,
      "stock": 100
    },
    {
      "id": 4,
      "name": "Smart Watch",
      "brand": "DEF",
      "price": 199.99,
      "stock": 20
    }
  ]

const handleGetProducts = async(req, res)=>{
    return await res.json({ products })
}

const handlePostProducts = async(req, res)=>{
    const { id, name, brand, price, stock } = req.body


    if(!id){
        return await res.status(400).json({ message: "please provide product id" })
    }

    if(!name){
        return res.status(400).json({ message: "Please provide product name" })
    }
    if(!brand){
        return res.status(400).json({ message: "Please provide product brand" })
    }
    if(!price){
        return res.status(400).json({ message: "Please provide product price" })
    }
    if(!stock){
        return res.status(400).json({ message: "Please provide product stock" })
    }
    products.push({ id, name, brand, price, stock })
    return await res.status(200).json({ message: "products added successfully ", products})

}

module.exports = {
    handleGetProducts,
    handlePostProducts
}