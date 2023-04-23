/*
Create a list of APIs in order to handle e-commerce product data in following ways:
An API which will fetch all the product information from our database and provide it as a response to client requests.
An API which will fetch product information based on the id of the product .
An API which will fetch product details based on the name of the product.
An API which will add product information from the client to our database.
Note : Here we are not using an actual database , but will be creating an array to handle our temporary mock data.

The data can be stored in array as following :
Data = [
{
id:1,
name : product_name,
total_quantity:12,
type_of_product:shirt,
price : 300
},
]

Note : you can add your custom mock data in the given format.
List of APIs to be created :

Get request : /products :- will fetch all data and provide to the client.
Get request :/products/:id :-will fetch all data of product details based on id.
Get request :/products/:name :-will fetch all of the product details based on name.
Post request :/addproduct :- will add a new product to our mock array.
*/

const express = require("express")
const products = require("./products")
const app = express()
app.use(express.json())

app.get("/products",(req,res)=>{
    res.send(products)
})

app.get("/products/:id",(req,res)=>{
    products.find(ele => {
        if(ele.id == req.params.id){
            res.send(ele)
        }
    })
})

app.get("/products/:name", (req, res) => {
    products.find((ele) => {
        if (ele.title === req.params.name) {
            res.send(ele)
        }
    })
})

app.post("/addproduct",(req,res)=>{
    let prod = {}
    prod.id = req.body.id
    prod.title = req.body.title
    prod.category = req.body.category

    products.push(prod)
    console.log(products)
    res.send(prod)
})

app.listen(3000,()=>{
    console.log("server running at 3000")
})